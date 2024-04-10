// pages/api/signup.js
import jwt from 'jsonwebtoken';
import User from '../../../models/User';
import connectDb from '../../../middleware/connectDb';
import axios from 'axios';

const handler = async (req, res) => {
    if (req.method === 'POST') {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized: No token provided' });
        }
        try {
            const decoded = jwt.verify(token, "hello");
            const { userId } = decoded;
            const user = await User.findById(userId);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            const { business_id, name } = req.body;
     
            const projectName = { name };
            
            const apiUrl = `https://stoplight.io/mocks/aisensy/partner-api/54889159/partner/65e9fcb8abfa6918944c960e/business/${business_id}/project`;
            const headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-AiSensy-Partner-API-Key': '6ccf3e5a38a31d7f40be9_65e9fcb8abfa6918944c960e'
            };
            const response = await axios.post(apiUrl, projectName, { headers });
            console.log("id:"+response.data.id)
            const project_id=response.data.id;
            user.project_ids.push(project_id);  
            await user.save();
            const str = JSON.stringify(response.data); // Corrected this line
            res.status(201).json({ str });
        } catch (error) {
            console.error('Error getting user:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
};

export default connectDb(handler);
