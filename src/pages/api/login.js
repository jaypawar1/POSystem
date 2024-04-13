// pages/api/login.js

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../../models/User';
import connectDb from '../../middleware/connectDb';

const handler = async (req, res) => {
    if (req.method === 'POST') {
        const { email, password } = req.body;
        try {
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(401).json({ message: 'Invalid email or password' });
            }
            if (!user.password) {
                return res.status(500).json({ message: 'User password not found' });
            }
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (!passwordMatch) {
                return res.status(401).json({ message: 'Invalid email or password' });
            }
            const token = jwt.sign({ userId: user._id }, "hello", {
                expiresIn: '98h'
            });
            const data={
                token,
                user
            }
            res.status(200).json({data });
        } catch (error) {
            console.error('Error logging in:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    } 
};


export default connectDb(handler);
