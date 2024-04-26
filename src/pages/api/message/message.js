import axios from "axios";
import User from "../../../models/User";
import connectDb from "../../../middleware/connectDb";

const handler = async (req, res) => {
  try {
    if (req.method !== "POST") {
      throw new Error("Method Not Allowed");
    }
    let messageid;
    console.log(JSON.stringify(req.body));
    const authorizationHeader =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhc3Npc3RhbnRJZCI6IjY2MGU5OTM4ODU4NWNmMGJmZDZjN2U2YSIsImNsaWVudElkIjoiNjYwZTk5Mzg4NTg1Y2YwYmZkNmM3ZTYwIiwiaWF0IjoxNzEyNjU0NzQxfQ.pJC6GIOr8C_2hxvzeYJ2yjoWojwqB0u21v_cc7Mya54";
    const body = req.body;

    if (!body.entry || body.entry.length === 0) {
      console.log("4");
      res.status(200).end();
    }

    const entry = body.entry[0];
    if (!entry.changes || entry.changes.length === 0) {
      console.log("3");
      res.status(200).end();
    }

    const change = entry.changes[0];
    if (!change.value) {
      console.log("2");
      res.status(200).end();
    }
    if (!change.value.messages || !change.value.contacts) {
      console.log("1");
      res.status(200).end();
    } else {
      const value = change.value;
      const message = value.messages[0];
      const senderName = value.contacts[0].profile.name;
      const senderNumber = value.contacts[0].wa_id;
      const messageBody = message.text.body;
      console.log("Sender Name:", senderName);
      console.log("Sender Number:", senderNumber);
      console.log("Message:", messageBody);
      if (messageBody === "Hello") {
        const requestData = {
          to: senderNumber,
          type: "template",
          template: {
            language: {
              policy: "deterministic",
              code: "en",
            },
            name: "menulink",
            components: [
              {
                type: "body",
                parameters: [
                  { type: "text", text: senderName },
                  { type: "text", text: senderName },
                  { type: "text", text: senderName },
                  { type: "text", text: senderNumber },
                ],
              },
            ],
          },
        };
        const headers = {
          Accept: "application/json, application/xml",
          Authorization: `Bearer ${authorizationHeader}`,
          "Content-Type": "application/json",
        };

        // Make the Axios POST request
        await axios.post(
          "https://backend.aisensy.com/direct-apis/t1/messages",
          requestData,
          { headers },
        );
        setTimeout(async () => {
          const feedback = {
            to: senderNumber,
            type: "template",
            template: {
              language: {
                policy: "deterministic",
                code: "en",
              },
              name: "feedback",
              components: [],
            },
          };
          const headers = {
            Accept: "application/json, application/xml",
            Authorization: `Bearer ${authorizationHeader}`,
            "Content-Type": "application/json",
          };
          await axios.post(
            "https://backend.aisensy.com/direct-apis/t1/messages",
            feedback,
            { headers },
          );
        }, 5000);
      } else {
        const text = messageBody;
        const tableNoRegex = /table\s*no:\s*(\d+)/i;
        const tableNoMatch = text.match(tableNoRegex);
        const tableNo = tableNoMatch ? tableNoMatch[1] : null;
        const raCodeRegex = /\((RA\d+)\)/i;
        const raCodeMatch = text.match(raCodeRegex);
        const raCode = raCodeMatch ? raCodeMatch[1] : null;
        console.log(raCode);
        const user = await User.findOne({ RestorentCode: `${raCode}` });
        console.log(user._id);
        const requestData = {
          to: senderNumber,
          type: "template",
          template: {
            language: {
              policy: "deterministic",
              code: "en",
            },
            name: "menulink",
            components: [
              {
                type: "body",
                parameters: [
                  { type: "text", text: senderName },
                  { type: "text", text: senderName },
                  { type: "text", text: senderName },
                  { type: "text", text: senderNumber },
                ],
              },
            ],
          },
        };
        const headers = {
          Accept: "application/json, application/xml",
          Authorization: `Bearer ${authorizationHeader}`,
          "Content-Type": "application/json",
        };

        // Make the Axios POST request
        await axios.post(
          "https://backend.aisensy.com/direct-apis/t1/messages",
          requestData,
          { headers },
        );
        setTimeout(async () => {
          const feedback = {
            to: senderNumber,
            type: "template",
            template: {
              language: {
                policy: "deterministic",
                code: "en",
              },
              name: "feedback",
              components: [],
            },
          };
          const headers = {
            Accept: "application/json, application/xml",
            Authorization: `Bearer ${authorizationHeader}`,
            "Content-Type": "application/json",
          };
          await axios.post(
            "https://backend.aisensy.com/direct-apis/t1/messages",
            feedback,
            { headers },
          );
        }, 5000);
      }
    }
    res.status(200).end(); // Respond to the webhook request
  } catch (err) {
    console.error(err);
    res.status(500).send("An error occurred while processing the webhook data");
  }
};

export default connectDb(handler);
