"use client"
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import axios from 'axios';
import { MdDelete } from "react-icons/md";
import '../app/globals.css'
import Veg from "../img/1200px-Indian-vegetarian-mark.svg.png"
import NonVeg from "../img/245-2459071_non-veg-icon-non-veg-symbol-png.png"
import Image from 'next/image';
import { CiSearch } from "react-icons/ci";
import { AiOutlineScan } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import Cryptr from 'cryptr';
import { io } from "socket.io-client"
const socket = io();
const Menu = () => {
    const searchParams = useSearchParams()
    const cryptr = new Cryptr('mysecret');
    const search = searchParams.get('data')
    if (search) {
        console.log(search);

        const info = cryptr.decrypt(search);
        const data = JSON.parse(info)
        console.log(data)
    }


    const [dishes, setDishes] = useState([]);
    const [cart, setCart] = useState([]);
    const [showReview, setShowReview] = useState(false);
    const [selectedDishId, setSelectedDishId] = useState(null);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await axios.get('/data.json');
                setDishes(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    const sendMenuOrder = (cart) => {
        socket.emit('menuOrder', cart);
    };
    const addToCart = (id) => {
        const existingItem = cart.find(item => item.id === id);
        if (existingItem) {
            increaseQuantity(id)
            return;
        } else {
            const dish = dishes.find(dish => dish.id === id);
            setCart(prevCart => [...prevCart, { ...dish, quantity: 1 }]);
        }
    };

    const increaseQuantity = (id) => {
        setCart(cart.map(item => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        }));
    };

    const removeFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    const toggleReviewPanel = () => {
        setShowReview(!showReview);
    };

    const getTotalPrice = () => {
        return cart.reduce((acc, current) => acc + Number(current.price) * current.quantity, 0);
    };

    const handleDishClick = (id) => {
        setSelectedDishId(selectedDishId === id ? null : id); // Toggle the selection or select a new dish
    };

    return (
        <div className='bg-white min-h-screen'>
            <nav className='flex h-[8vh] items-center justify-between'>
                <h1 className='text-3xl text-center py-3 mx-3 font-extrabold'>Menu</h1>
                <div className='m-3 flex gap-3 text-3xl font-semibold'>
                    <button><CiSearch /></button>
                    <button><AiOutlineScan /></button>
                    <button><FaUserCircle /></button>
                </div>
            </nav>
            <nav className='menunav m-3 overflow-x-scroll my-4 flex items-center'>
                <ul className='flex text-nowrap gap-3 overflow-x-scroll'>
                    <li><a className='text-xl text-zinc-500 hover:text-zinc-700
                    active:text-zinc-950' href=".">Specials</a></li>
                    <li><a className='text-xl text-zinc-500 hover:text-zinc-700
                    active:text-zinc-950' href=".">Food</a></li>
                    <li><a className='text-xl text-zinc-500 hover:text-zinc-700
                    active:text-zinc-950' href=".">Beverages</a></li>
                    <li><a className='text-xl text-zinc-500 hover:text-zinc-700
                    active:text-zinc-950' href=".">Desserts</a></li>
                    <li><a className='text-xl text-zinc-500 hover:text-zinc-700
                    active:text-zinc-950' href=".">Veg Specials</a></li>
                </ul>
                <div className='sticky right-0 bg-gradient-to-r from-slate-50/5 to-slate-100 text-2xl'><IoIosArrowForward className='bg-gradient-to-r from-slate-50/5 to-slate-100' /></div>
            </nav>
            <div className="grid md:grid-cols-4 sm:grid-cols-4 grid-cols-2 gap-4 p-4 ">
                {dishes.map(dish => (
                    <div key={dish.id} className="sm:w-[20vw] w-[45vw] rounded-3xl overflow-hidden justify-center items-center shadow-lg  m-auto sm:min-h-[15vh] sm:max-h-fit min-h-[15vh] ease-in max-h-fit flex flex-col bg-[#ebfffd]" onClick={() => handleDishClick(dish.id)}>
                        <img
                            className="w-full h-40 rounded-n-xl  object-cover"
                            src={dish.img}
                            alt={`Image of ${dish.name}`}
                        />
                        <div className="py-4 pb-2 flex-grow justify-start w-full">
                            <div className="font-bold sm:text-xl w-full flex flex-col justify-start text-base overflow-hidden text-gray-900 text-left">
                                <div className="flex w-full justify-start items-center text-left">
                                    <Image className='w-4 h-4 ml-3 mr-2' src={dish.veg ? Veg : NonVeg} alt={dish.veg ? "Vegetarian" : "Non-Vegetarian"} />
                                    {dish.name}
                                </div>
                            </div>
                            {selectedDishId === dish.id && (
                                <p className="border-gray-300 mx-2 text-base">
                                    {dish.description}
                                </p>
                            )}
                        </div>
                        <div className="sm:px-6 px-2 w-full pb-4 flex justify-between items-center">
                            <span className="inline-block font-extrabold rounded-full px-3 py-1 sm:text-xl text-base text-[#20413a]">₹{dish.price}</span>
                            <button onClick={(e) => { e.stopPropagation(); addToCart(dish.id); }} className="bg-white text-[#b27154] font-semibold uppercase py-0.5 mr-3 px-3 rounded-lg border-[#b27154] border-[1px]">Add</button>
                        </div>
                    </div>

                ))}
            </div>
            {cart.length > 0 && (
                <div className='sticky bottom-5 w-screen flex justify-center'>
                    <div className="sticky inset-x-0 shadow-xl w-[90%] mt-10 rounded-2xl bottom-10 bg-[#faf7f0] border-yellow-900 border  text-gray-900 py-4 px-6 flex justify-between items-center space-x-4 z-50">
                        <div className='flex gap-4 text-sm sm:text-base'>
                            <span className='font-semibold'>Total Price:<span className='text-lg'> ₹{getTotalPrice().toFixed(2)}</span></span>
                        </div>
                        <div className='flex sm:gap-4 gap-2'><button onClick={toggleReviewPanel} className="bg-[#8a6240] hover:bg-[#4d2d18] text-white text-xs  sm:text-base font-bold h-12 w-28 px-0.5 rounded">
                            Review Items
                        </button>
                            <button className="bg-[#8a6240] text-xs hover:bg-blue-700  sm:text-base text-white font-bold px-0.5 rounded h-12 w-28">
                                Place order
                            </button></div>
                    </div>
                </div>
            )}

            {showReview && (
                <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-md w-full animate__animated animate__fadeIn">
                        <div className="px-6 py-8">
                            <h2 className="text-3xl font-bold mb-4 text-gray-900 text-center">Review Your Cart</h2>
                            <div className="divide-y divide-gray-200">
                                {cart.map((item, index) => (
                                    <div key={index} className="flex justify-between my-3 items-center py-4">
                                        <div className="flex items-center">
                                            <img src={item.img} alt={item.name} className="h-16 w-16 rounded-full object-cover mr-4" />
                                            <div>
                                                <p className="text-lg font-semibold text-gray-900">{item.name}</p>
                                                <p className="text-gray-600">₹{item.price}</p>
                                            </div>
                                            <p className="mx-4">{item.quantity}</p>
                                            <button onClick={() => increaseQuantity(item.id)} className="text-base font-semibold bg-blue-500 text-white px-2 py-1.5 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out">+</button>
                                        </div>
                                        <button onClick={() => removeFromCart(item.id)} className="text-red-600 hover:text-red-800 text-2xl dark:hover:text-red-400 font-semibold"><MdDelete /></button>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-gray-100 px-6 py-4 flex justify-between items-center">
                            <span className="text-xl font-semibold text-gray-900">Total: ₹{getTotalPrice().toFixed(2)}</span>
                            <div className="flex space-x-4">
                                <button onClick={toggleReviewPanel} className="bg-red-500 hover:bg-red-600 text-white font-bold px-4 py-2 rounded transition duration-300 ease-in-out">Close</button>
                                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 py-2 rounded transition duration-300 ease-in-out" onClick={sendMenuOrder(cart)}>Proceed to Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}





        </div>
    );
};

export default function Searchbar() {
    return (
        // You could have a loading skeleton as the `fallback` too
        <Suspense>
            <Menu />
        </Suspense>
    )
}