import axios from 'axios';
import crypto from 'crypto';
import connectDb from '../../middleware/connectDb';

const handler = async (req, res) => {
    if (req.method === 'POST') {
        const sharedSecret = '5c96789d5ec4e8ec8f834'; // Replace with your actual shared secret
        const receivedSignature = req.headers['x-aisensy-signature'];
        const requestBody = JSON.stringify(req.body);

        // Calculate signature from the request body using the shared secret
        const hmac = crypto.createHmac('sha256', sharedSecret);
        const calculatedSignature = hmac.update(requestBody).digest('hex');

        // Compare received signature with calculated signature
        if (receivedSignature === calculatedSignature) {
            // Signature is valid, process the webhook events
            console.log('Received webhook events:', req.body);
            res.status(200).send('Webhook events received and validated.',req.body);
        } else {
            // Signature is invalid, reject the request
            console.error('Invalid signature. Webhook request rejected.');
            res.status(403).send('Invalid signature.');
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}

export default connectDb(handler);
