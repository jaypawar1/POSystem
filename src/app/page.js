"use client"
import { useState, useEffect } from 'react';
import POSoftware from '@/pages/posoft';
import "./globals.css";
import Footer from '@/components/footer';

import LoginReg from '@/pages/login';
const App =() => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedToken = localStorage.getItem('token');
      setToken(storedToken);
    }
  }, []);
  return (
    <>
  
      {token ? <><POSoftware /><Footer /></> :<LoginReg />}
    </>
  );
  }


export default App;
