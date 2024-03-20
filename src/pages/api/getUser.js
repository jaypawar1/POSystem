// pages/api/signup.js
import jwt from 'jsonwebtoken';
import User from '../../models/User';
import connectDb from '../../middleware/connectDb';

const handler = async (req, res) => {
    if (req.method === 'GET') {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized: No token provided' });
        }
        
        try {
            const decoded = jwt.verify(token, "hello");
            const { userId } = decoded;
            console.log(userId);
            const user = await User.findById(userId);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json({ user });
        } catch (error) {
            console.error('Error getting user:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
};

export default connectDb(handler);
