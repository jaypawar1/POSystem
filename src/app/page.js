// import { useState, useEffect } from 'react';
// import POSoftware from '@/pages/posoft';
// import "./globals.css";
// import Footer from '@/components/footer';
"use client";
import React, { useState, useEffect } from "react";
import Templates from "@/pages/Templates";
import LoginReg from "@/pages/login";
import { Sidebar } from "@/components/sidebar";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      const token = localStorage.getItem("token");
      const user = localStorage.getItem("user");
      console.log(user);
      if (!token) {
        setIsLoggedIn(false);
      } else {
        console.log(token);
        setIsLoggedIn(true);
      }
    };
    checkUser();
  }, []);

  return <>{isLoggedIn ? <Sidebar /> : <LoginReg />}</>;
};

export default App;
