"use client";
import React, { useEffect, useState } from "react";
import QRCode from "qrcode";

function WhatsAppMessageSender() {
  const [restaurant, setRestaurant] = useState("");
  const [table, setTable] = useState("");
  const [qrCodeUrl, setQRCodeUrl] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => {
    const userFromLocalStorage = localStorage.getItem("user");

    if (userFromLocalStorage) {
      const data = JSON.parse(userFromLocalStorage);
      const code = data.data.user.RestorentCode;
      setRestaurant(code);
    }
  }, []);
  console.log(user);
  const generateQR = () => {
    const message = `hello welcome to restorent (${restaurant})
    at table no: ${table}`;
    const qrUrl = `https://wa.me/917709196986?text=${encodeURIComponent(message)}`;
    QRCode.toDataURL(qrUrl, function (err, url) {
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
