import { createHmac } from 'crypto';

export default function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { notification } = req.body;
      const receivedSignature = req.headers["x-aisensy-signature"];
      const sharedSecret = "WEBHOOK_SHARED_SECRET"; // Replace with your actual shared secret
      const generatedSignature =  createHmac("sha256", sharedSecret)
                                    .update(JSON.stringify(notification))
                                    .digest("hex");
      console.log(res.body);
      if (receivedSignature === generatedSignature) {
        res.status(200).send("Signature Matched");
      } else {
        res.status(500).send("Signature didn't Match");
      }
    } catch(err) {
      console.error(err);
      res.status(500).send("An error occurred while verifying the signature");
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
