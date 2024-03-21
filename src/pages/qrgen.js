import React, { useState } from 'react';
import QRCode from 'qrcode';
import axios from 'axios'; // corrected import statement

function WhatsAppMessageSender() {
    const [message, setMessage] = useState('');
    const [qrCodeUrl, setQRCodeUrl] = useState('');
    const [data,setData]=useState('');

    const generateQR = () => {
        const qrUrl = `https://wa.me/15550636749?text=${encodeURIComponent(message)}`;
        
        QRCode.toDataURL(qrUrl, function(err, url) {
            if (err) {
                console.error(err);
                return;
            }
            
            setQRCodeUrl(url);
        });
    };

    const getMessageFromWebhook = () => {
        axios.post('https://temporal-leather-shock.glitch.me/webhook')
            .then(response => {
                const messageBody = response.data.entry[0].changes[0].value.messages[0].text.body;
                setData(messageBody);
                console.log(data)
            })
            .catch(error => {
                console.error('Error fetching message from webhook:', error);
            });
    };

    return (
        <div>
            <h1>WhatsApp Message Sender</h1>
            <label htmlFor="message">Enter your message:</label>
            <input 
                type="text" 
                id="message" 
                name="message" 
                value={message} 
                onChange={(e) => setMessage(e.target.value)} 
            />
            <button onClick={generateQR}>Generate QR Code</button>
            <button onClick={getMessageFromWebhook}>Get Message from Webhook</button>
            <br />
            <br />
            {qrCodeUrl && <img src={qrCodeUrl} alt="QR Code" />}
        </div>
    );
}

export default WhatsAppMessageSender;
