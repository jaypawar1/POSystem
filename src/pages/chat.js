"use client"

import React, { useState, useRef, useEffect } from 'react';
import { IoSend } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { MdOutlineSort } from "react-icons/md";
import { MdFilterList } from "react-icons/md";
import { FaEdit } from 'react-icons/fa';
import { Sidebar } from '@/components/sidebar';
import Image from 'next/image';

const Chats = () => {
    const [activeTab, setActiveTab] = useState(1);
    const [inputText, setInputText] = useState('');
    const [messages, setMessages] = useState([
        { text: 'Hello!', sender: 'user' },
        { text: 'Hi there!', sender: 'bot' },
    ]);
    const chatboxRef = useRef(null);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    const handleSendMessage = () => {
        if (inputText.trim() === '') return;
        setMessages([{ text: inputText, sender: 'user' }, ...messages]);
        setInputText('');
    };

    useEffect(() => {
        // Scroll to the bottom of the chatbox when messages change
        chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
    }, [messages]);

    return (
        <div className="flex">
            <Sidebar/>
            <div className="w-[95vw] h-screen flex flex-col">
                <header className="h-[10vh] w-full flex">
                    <div className="flex h-[10vh] gap-2 w-[40%] items-center">
                        <div className="flex ml-5 h-[5vh] bg-gray-100/50 rounded-md rounded-e-3xl border w-[70%]">
                            <input
                                placeholder="Search Name or mobile number"
                                type="text"
                                className="bg-transparent focus:outline-none w-full"
                            />
                            <button className="rounded-full bg-green-200 p-2">
                                <BiSearch className="text-lg" />
                            </button>
                        </div>
                        <button className="text-2xl">
                            <MdOutlineSort />
                        </button>
                    </div>
                    <div className="w-[60%] h-[10vh] flex justify-between">
                        <button className="text-2xl">
                            <IoMdArrowDropleft />
                        </button>
                        <button className="text-2xl">
                            <IoMdArrowDropright />
                        </button>
                    </div>
                </header>
                <nav className="h-[8vh] bg-emerald-900 w-full flex">
                    <button
                        className={`flex justify-center uppercase items-center px-5 text-white text-sm ${
                           activeTab === 1 && 'border-b-2 border-white'
                        }`}
                        onClick={() => handleTabClick(1)}
                    >
                        Active(0)
                    </button>
                    <button
                        className={`flex justify-center uppercase items-center px-5 text-white text-sm ${
                            activeTab === 2 && 'border-b-2 border-white'
                        }`}
                        onClick={() => handleTabClick(2)}
                    >
                        Requesting(0)
                    </button>
                    <button
                        className={`flex justify-center items-center px-5 text-white  uppercase text-sm ${
                            activeTab === 3 && 'border-b-2 uppercase border-white'
                        }`}
                        onClick={() => handleTabClick(3)}
                    >
                        Intervened(0)
                    </button>
                </nav>
                <div className='h-[82vh] w-full flex'>
                    <div className='w-[18vw] flex flex-col items-center h-full bg-amber-100/30'>
                        <div className='flex my-2 w-full items-center justify-between'>
                            <p className='text-xl mx-3 font-semibold'>Chats</p>
                            <div className='flex gap-2'>
                                <button className='text-2xl'><FaEdit/></button>
                                <button className='text-2xl'>< MdFilterList/></button>
                            </div>
                        </div>
                    <div className="flex h-[5vh] bg-gray-100 rounded-3xl border w-[90%]">
                            <input
                                placeholder="Search"
                                type="text"
                                className="bg-transparent focus:outline-none w-full"
                            />
                            <button className="rounded-full bg-green-200 p-2">
                                <BiSearch className="text-lg" />
                            </button>
                        </div>
                        <div className='w-full cursor-pointer my-2 h-14  items-center border-y flex'>
                        <Image className=' h-10 w-auto rounded-full m-2' src={"https://i.pinimg.com/564x/f1/39/dc/f139dc89e5b1ad0818f612c7f33200a5.jpg"} alt="" />
                        <div className='flex w-[60%] flex-col'>
                            <p className='text-sm'>Demo User</p>
                            <p className='text-xs text-gray-600'>Hello</p>
                        </div>
                        <div className='justify-end items-start flex w-full'><p className='text-gray-600 text-xs'>3:19PM</p></div>
                        </div>
                    </div>
                    <div className='w-[45vw] chatbox h-full design flex flex-col'>
                        <div ref={chatboxRef} className='overflow-y-scroll hidescroll flex flex-col-reverse min-h-[75vh]'>
                            {messages.map((message, index) => (
                                <div key={index} className={`chat-bubble ${message.sender === 'user' ? 'user' : 'bot'}`}>
                                    {message.text}
                                </div>
                            ))}
                        </div>
                        <div className="flex items-center">
                            <input
                                type="text"
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                                placeholder="Type your message..."
                                className="w-full p-2 rounded border border-gray-300"
                            />
                            <button onClick={handleSendMessage} className="ml-2 px-4 py-2 bg-[#009945] text-2xl text-white rounded"><IoSend/></button>
                        </div>
                    </div>
                    <div className='w-[17.5vw] h-full'>
                        <div className='flex w-full h-[20vh] justify-center items-center border-b'>
                            <Image className=' h-24 w-auto rounded-full' src={"https://i.pinimg.com/564x/f1/39/dc/f139dc89e5b1ad0818f612c7f33200a5.jpg"} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chats;
