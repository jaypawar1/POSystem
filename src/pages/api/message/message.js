import axios from 'axios';
export default function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const authorizationHeader = req.headers['authorization'];
      console.log(JSON.stringify(req.body));
      const entry = res.body;
      const senderName = entry.changes[0].value.contacts[0].profile.name;
      const senderNumber = entry.changes[0].value.contacts[0].wa_id;
      const message = entry.changes[0].value.messages[0].text.body;
      console.log("Sender Name:", senderName);
      console.log("Sender Number:", senderNumber);
      console.log("Message:", message);
      const requestData = {
        to: senderNumber,
        type: "template",
        template: {
          language: {
            policy: "deterministic",
            code: "en"
          },
          name: "menulink",
          components: [
            {
              type: "body",
              parameters: [
                {
                  type: "text",
                  text: senderName
                },
                {
                  type: "text",
                  text: senderName
                },
                {
                  type: "text",
                  text: senderName
                },
                {
                  type: "text",
                  text: senderNumber
                }
              ]
            }
          ]
        }
      };

      // Define the headers
      const headers = {
        'Accept': 'application/json, application/xml',
        'Authorization': `${authorizationHeader}`,
        'Content-Type': 'application/json'
      };

      // Make the Axios POST request
      axios.post('https://backend.aisensy.com/direct-apis/t1/messages', requestData, { headers })
        .then(response => {
          console.log('Response:', response.data);
        })
        .catch(error => {
          console.error('Error:', error.response.data);
        });
      res.status(500).send(JSON.stringify(req.body))
    } catch (err) {
      console.error(err);
      res.status(500).send("An error occurred while verifying the signature");
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
