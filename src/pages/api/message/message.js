import axios from 'axios';

export default async function handler(req, res) {
    if (req.method === 'GET') {
        if (
            req.query["hub.mode"] === "subscribe" &&
            req.query["hub.verify_token"] === "token"
        ) {
            res.send(req.query["hub.challenge"]);
        } else {
            res.status(400).end();
        }
    } else if (req.method === 'POST') {
        console.log("Incoming webhook: " + JSON.stringify(req.body));

        // Extract message body from the request
        const messageBody = req.body.entry[0].changes[0].value.messages[0].text.body;
        console.log("Received message: " + messageBody);

        const contact = req.body.entry[0].changes[0].value.contacts[0];
        const contactName = contact.profile.name;
        const contactNumber = contact.wa_id;
        await sendMessage(contactNumber, `Hello ${contactName} from your RestoAI!`);

        res.status(200).end();
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}

// Function to send message using Facebook Messenger API
async function sendMessage(recipientPhoneNumber, message) {
    try {
        const response = await axios.post('https://graph.facebook.com/v18.0/me/messages?access_token=YOUR_ACCESS_TOKEN', {
            messaging_type: 'MESSAGE_TAG',
            recipient: {
                phone_number: recipientPhoneNumber
            },
            message: {
                text: message
            }
        });

        console.log("Message sent:", response.data);
    } catch (error) {
        console.error("Error sending message:", error);
    }
}
