import { createHmac } from 'crypto';

export default function handler(req, res) {
  if (req.method === 'POST') {
    try {
      console.log(JSON.stringify(req.body));
      const entry = res.body.entry[0];
      const senderName = entry.changes[0].value.contacts[0].profile.name;
      const senderNumber = entry.changes[0].value.contacts[0].wa_id;
      const message = entry.changes[0].value.messages[0].text.body;
      
      // Now you can use these variables as needed
      console.log("Sender Name:", senderName);
      console.log("Sender Number:", senderNumber);
      console.log("Message:", message);

      res.status(500).send(JSON.stringify(req.body))
    } catch(err) {
      console.error(err);
      res.status(500).send("An error occurred while verifying the signature");
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
