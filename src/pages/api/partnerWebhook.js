import { createHmac } from 'crypto';

const createHash = async (text, secret) => {
  const hash = createHmac("sha256", secret).update(text).digest("hex");
  return hash;
};

export default async (req, res) => {
  if (req.method === 'POST') {
    try {
      const notification = req.body;
      const receivedSignature = req.headers["x-aisensy-signature"];
      const sharedSecret = "a59928835e7e128ad692d"; // Replace with your actual webhook shared secret

      // Provide the notification data as it is
      const generatedSignature = await createHash(JSON.stringify(notification), sharedSecret);
      
      if (receivedSignature === generatedSignature) {
        res.status(200).send("Signature Matched",req.body);
      } else {
        res.status(500).send("Signature didn't Match");
      }
    } catch(err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    }
  } else {
    res.status(405).send("Method Not Allowed");
  }
};
