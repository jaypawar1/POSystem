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
            const { category, number } = req.body;
            const index = (cate) => {
                for (let i = 0; i < user.tables.length; i++) {
                    if (cate === user.tables[i].catagory) {
                        return (i)
                    }
                }
                return (-1);
            }
        
                user.tables.push({ catagory: category });
                await user.save();
                let position = index(category);
                for(let i=0;i<number;i++){
                    user.tables[position].table.push({ number:i});
                    await user.save();
                }
            const tables = user.tables;
            res.status(200).json({ tables });
        } catch (error) {
            console.error('Error adding menu:', error);
            res.status(500).json({ message: error });
        }
    }
};

export default connectDb(handler);
