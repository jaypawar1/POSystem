// import { useState, useEffect } from 'react';
// import POSoftware from '@/pages/posoft';
// import "./globals.css";
// import Footer from '@/components/footer';
"use client";
import React, { useState, useEffect } from 'react';
import Templates from "@/pages/Templates"; 
import LoginReg from '@/pages/login';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        setIsLoggedIn(false);
      } else {
        try {
          const response = await fetch('/api/getUser', {
            method: 'GET',
            headers: { authorization: token }
          });

          if (response.ok) {
            setIsLoggedIn(true);
            localStorage.setItem('user', JSON.stringify(response));

          } else {
            setIsLoggedIn(false);
          }
        } catch (err) {
          console.log("error", err);
          setIsLoggedIn(false);
        }
      }
    };

    checkUser();
  }, []);

  return (
    <>
      {isLoggedIn ? <Templates /> : <LoginReg />}
    </>
  );
};

export default App;
