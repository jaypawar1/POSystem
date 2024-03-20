import jwt from 'jsonwebtoken';
import User from '../../../models/User';
import connectDb from '../../../middleware/connectDb';

const handler = async (req, res) => {
    if (req.method === 'POST') {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized: No token provided' });
        }

        try {
            const decoded = jwt.verify(token, "hello");
            const { userId } = decoded;
            const user = await User.findById(userId); // Populate the Menu property
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            const { category} = req.body;
            if (!category) {
                return res.status(400).json({ message: 'Missing required fields' });
            }

            user.menu.push({ catagory: category });
            await user.save();
            const menu=user.menu
            res.status(200).json({menu});
        } catch (error) {
            console.error('Error adding menu:', error);
            res.status(500).json({ message: error });
        }
    }
};

export default connectDb(handler);
