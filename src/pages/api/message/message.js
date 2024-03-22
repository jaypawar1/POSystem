import axios from 'axios';
import client from '../../../models/client';
import connectDb from '../../../middleware/connectDb';
import Cryptr from 'cryptr';

const cryptr = new Cryptr('mysecret');

const handler = async (req, res) => {
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

        // Access table property after decryption
        const table = JSON.parse(messageBody).table;
        
        const contact = req.body.entry[0].changes[0].value.contacts[0];
        const contactName = contact.profile.name;
        const contactNumber = contact.wa_id;
        
        let cli = await client.findOne({ phone: contactNumber });
        if (!cli) {
            // If client not found, create a new document
            cli = new client({ name: contactName, phone: contactNumber });
            await cli.save();
        }
        
        const data = cryptr.encrypt({
            name: contactName,
            number: contactNumber,
            msg: messageBody
        });

        const accessToken = "EAAIqSsKeP0QBOx6KtD1xzZBAghkvVvbsZC297LcmEWI22ffUK3mRUPaP5ItCkQZBmBr4KvCyM4p8Bdyd20Me91tBVhcWDJgyjCWR0qXdXmkCLFKol8KxuvIZAIS0R3ZBUtwJjZBue7HzU0NHm5z6AYxsTG3GKhLSRx83q5uwLdHofkO0ZCo7qw031YfUZCPwQRTeSAXTG81URLoBo3HE7RsZD";

        await sendMessage(contactNumber, `Hello ${contactName} from your RestoAI! \n click the link to order \n https://posystem.onrender.com/menu?data=${data}`, accessToken);
        
        res.status(200).end();
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}

// Function to send message using Facebook Messenger API
async function sendMessage(recipientPhoneNumber, message, accessToken) {
    try {
        const config = {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        };

        const response = await axios.post('https://graph.facebook.com/v18.0/101529309513661/messages', {
            messaging_product: 'whatsapp',
            recipient_type: "individual",
            to: recipientPhoneNumber,
            type: "text",
            text: { // the text object
                preview_url: false,
                body: message
            }
        }, config);

        console.log("Message sent:", response.data.error);
    } catch (error) {
        console.error("Error sending message:", error);
    }
}

export default connectDb(handler);
