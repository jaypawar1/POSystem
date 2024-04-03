
// import { useState, useEffect } from 'react';
// import POSoftware from '@/pages/posoft';
// import "./globals.css";
// import Footer from '@/components/footer';

import selectMenu from "@/pages/selectMenu";

// import LoginReg from '@/pages/login';
const App =() => {
  // const [token, setToken] = useState(null);
  const Menu = selectMenu
  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     const storedToken = localStorage.getItem('token');
  //     setToken(storedToken);
  //   }
  // }, []);
  return (
    <>
    <Menu/>
      {/* {token ? <><POSoftware /><Footer /></> :<LoginReg />} */}
    </>
  );
  }


export default App;
