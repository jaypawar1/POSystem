import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 rounded-lg">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8">
          
          <div className="flex items-center justify-center md:col-span-1 lg:col-span-2 flex-col">
           <p className='text-3xl'>The Royal Food Mania</p>
            
          </div>

          
          <div className="md:col-span-1 lg:col-span-2">
            <p className="text-center md:text-left text-lg font-bold mb-4">Outdoor Setting | Takeaway | Delivery</p>
            <div className="flex flex-col justify-center md:justify-start mb-4 gap-y-5">
              <div className="text-center md:text-left ">
                <p className="font-bold text-lg">Average Cost</p>
                <p>INR 1300 for two people (approx)</p>
              </div>
              <div className="text-center md:text-left">
                <p className="font-bold text-lg">Opening Hours</p>
                <p>Monday: 7PM - 12AM</p>
                <p>Tuesday: 12PM - 12AM</p>
                <p>Wednesday: 12PM - 12AM</p>
                <p>Thursday: 12PM - 12AM</p>
                <p>Friday: 12PM - 12AM</p>
                <p>Saturday: 12PM - 12AM</p>
                <p>Sunday: 12PM - 12AM</p>
              </div>
            </div>
            <hr className='text-white my-5'/>
            <div className="text-center md:text-left flex flex-col gap-y-3">
              <p className="font-bold text-lg">Contact Us</p>
              <p className='flex w-full gap-x-2 items-center justify-center'><span className='text-xl'><CiMail/></span>Mail: eat@netflix.co.in</p>
              <p className='flex w-full gap-x-2 items-center justify-center'><span className='text-xl'><FaWhatsapp/></span>WhatsApp: +1234567890</p>
            </div>
          </div>

          
          <div className="text-center md:text-left">
            <p className="font-bold text-lg mb-4">Follow Us</p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-white text-3xl hover:text-gray-400">
                <IoLogoFacebook/>
              </a>
              <a href="#" className="text-white text-3xl hover:text-gray-400">
                <FaSquareXTwitter/>
              </a>
              <a href="#" className="text-white text-3xl hover:text-gray-400">
                <FaInstagram/>
              </a>
            </div>
          </div>
        </div>

       
        <div className="mt-8 text-center">
          <p>&copy; 2024 Netflix Cafe. All rights reserved.</p>
          <div className="flex items-center flex-col gap-y-4 justify-center mt-4">
            <img src={"https://seeklogo.com/images/F/fssai-logo-C7400699BD-seeklogo.com.png"} alt="FSSAI Logo" className="w-auto h-8 mr-2" />
            <p>License Number: XXXXXXXX</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
