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
            console.log(userId);
            const user = await User.findById(userId);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            const { formData } = req.body;
            console.log("formdata", formData);

            const apiUrl = 'https://apis.aisensy.com/partner-apis/v1/partner/65e9fcb8abfa6918944c960e/business';
            const headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-AiSensy-Partner-API-Key': '6ccf3e5a38a31d7f40be9_65e9fcb8abfa6918944c960e'
            };
            const response = await axios.post(apiUrl, formData, { headers });
            const ref = await User.findByIdAndUpdate(userId, { BusnessId: response.data.business_id, busnessPassword: formData.password }, { new: true })
            ref;
            res.status(201).json({ data: response.data.business_id })
        } catch (error) {
            console.error('Error getting user:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
};

export default connectDb(handler);
