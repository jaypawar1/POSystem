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
            const { category, name, price, description } = req.body;
            if (!category || !name || !price || !description) {
                return res.status(400).json({ message: 'Missing required fields' });
            }
            const index=(cate)=>{
                for(let i=0;i<user.menu.length;i++){
                    if(cate===user.menu[i].catagory){
                        return(i)
                    }
                }
                return(-1);
            }
            const position=index(category);
            console.log(position)
            user.menu[position].menuItems.push({
                menuItem:name,
                price,
                desc: description
            })
            await user.save();
            const sen = user.menu;
            res.status(200).json({sen});
        } catch (error) {
            console.error('Error adding menu:', error);
            res.status(500).json({ message: error });
        }
    }
};

export default connectDb(handler);
