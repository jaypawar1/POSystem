// pages/api/signup.js

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'; // Add this import statement
import User from '../../models/User';
import connectDb from '../../middleware/connectDb';

const handler = async (req, res) => {
    if (req.method === 'POST') { // Use strict equality operator '==='
        const { username, password, email, phone, company } = req.body;
        try {
            const existingUser = await User.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ message: 'Email already exists' });
            }
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = new User({ username, password: hashedPassword, email, phone, company, role: "Owner" });
            await newUser.save();
            const token = jwt.sign({ userId: newUser._id }, "hello", {
                expiresIn: '24h'
            });
            res.status(200).json({ token });
        } catch (err) {
            console.error('Error signing up:', err);
            res.status(500).json({ message: 'Internal server error' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
};

export default connectDb(handler);
