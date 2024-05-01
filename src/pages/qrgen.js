"use client"
import React, { useEffect, useState } from 'react';
import QRCode from 'qrcode';

function WhatsAppMessageSender() {
    const [restaurant, setRestaurant] = useState('');
    const [table, setTable] = useState('');
    const [qrCodeUrl, setQRCodeUrl] = useState('');
    const [user, setUser] = useState('');

    useEffect(() => {
        const userFromLocalStorage = localStorage.getItem("user");
        if (userFromLocalStorage) {
            const parsedUser =JSON.parse(userFromLocalStorage);
            setUser(parsedUser.data);
         
        }
    }, []);
    console.log(user)
    const generateQR = () => {
        const data = {
            restaurant,
            table,
        };
        const message = JSON.stringify(data);
        const qrUrl = `https://wa.me/91${user.user.phone}?text=${encodeURIComponent(message)}`;
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
            <label htmlFor="restaurant">Enter restaurant name:</label>
            <input 
                type="text" 
                id="restaurant" 
                name="restaurant" 
                value={restaurant} 
                onChange={(e) => setRestaurant(e.target.value)} 
            />
            <label htmlFor="table">Enter table number:</label>
            <input 
                type="number" 
                id="table" 
                name="table" 
                value={table} 
                onChange={(e) => setTable(e.target.value)} 
            />
            <button onClick={generateQR}>Generate QR Code</button>
            <br />
            <br />
            {qrCodeUrl && <img src={qrCodeUrl} alt="QR Code" />}
        </div>
    );
}

export default WhatsAppMessageSender;
