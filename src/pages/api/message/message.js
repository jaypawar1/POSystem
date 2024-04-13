import { createHmac } from 'crypto';

export default function handler(req, res) {
  if (req.method === 'POST') {
    try {
      console.log(JSON.stringify(req.body));
      res.status(500).send(JSON.stringify(req.body))
    } catch(err) {
      console.error(err);
      res.status(500).send("An error occurred while verifying the signature");
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
