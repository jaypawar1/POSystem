"use client"
import React, { useState } from 'react';
import QRCode from 'qrcode';

function WhatsAppMessageSender() {
    const [message, setMessage] = useState('');
    const [qrCodeUrl, setQRCodeUrl] = useState('');

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
            <br />
            <br />
            {qrCodeUrl && <img src={qrCodeUrl} alt="QR Code" />}
        </div>
    );
}

export default WhatsAppMessageSender;
