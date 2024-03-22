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

const Menu = () => {
    const searchParams = useSearchParams()
 
  const search = searchParams.get('data')
    console.log(search);
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
                <button><AiOutlineScan/></button>
                <button><FaUserCircle/></button>
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
                <div className='sticky right-0 bg-gradient-to-r from-slate-50/5 to-slate-100 text-2xl'><IoIosArrowForward className='bg-gradient-to-r from-slate-50/5 to-slate-100'/></div>
            </nav>
            <div className="grid md:grid-cols-4 sm:grid-cols-4 grid-cols-2 gap-4 p-4 ">
                {dishes.map(dish => (
                    <div key={dish.id} className="sm:w-[20vw] w-[45vw] rounded-3xl overflow-hidden justify-center items-center shadow-lg  m-auto sm:min-h-[45vh] sm:max-h-fit min-h-[33vh] ease-in max-h-fit flex flex-col bg-[#ebfffd]" onClick={() => handleDishClick(dish.id)}>
                        <img
              className="w-full h-40 rounded-n-xl  object-cover"
              src={dish.img}
              alt={`Image of ${dish.name}`}
            
            />
            
                        <div className="px-6 py-4 flex-grow">
                    
                            <div className="font-bold sm:text-xl flex items-center text-base mb-2 overflow-hidden text-gray-900"><Image className='w-4 h-4 mx-3' src={dish.veg ? Veg : NonVeg} alt={dish.veg ? "Vegetarian" : "Non-Vegetarian"} />{dish.name}</div>
                            {selectedDishId === dish.id && (
                              <p className="border-gray-300 text-base">
                                  {dish.description}
                              </p> 
                            )}
                        </div>
                        <div className="sm:px-6 px-2 w-full pb-4 flex justify-between items-center">
                            <span className="inline-block font-extrabold rounded-full px-3 py-1 sm:text-xl text-sm text-[#20413a]">₹{dish.price}</span>
                            <button onClick={(e) => { e.stopPropagation(); addToCart(dish.id); }} className="bg-white text-[#b27154] font-semibold uppercase py-1 px-3 rounded-lg border-[#b27154] border-[1px]">Add</button>
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
                   <div className='flex sm:gap-4 gap-2'><button onClick={toggleReviewPanel} className="bg-green-500 hover:bg-green-700 text-white text-sm  sm:text-base font-bold py-2 px-4 rounded">
                        Review Items
                    </button>
                    <button className="bg-blue-500 text-sm hover:bg-blue-700  sm:text-base text-white font-bold py-2 px-1 rounded">
                        Checkout
                    </button></div> 
                </div>
                </div>
            )}

{showReview && (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center h-screen">
        <div className="bg-[#faf7f0] p-5 rounded-lg shadow-lg max-w-2xl w-full max-h-[75vh]  overflow-y-scroll">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 ">Review Your Cart</h2>
            <div className="divide-y divide-gray-200">
                {cart.map((item, index) => (
                    <div key={index} className="flex justify-between my-3 items-center py-4">
                        <div className="flex items-center">
                            <img src={item.img} alt={item.name} className="h-16 w-16 rounded-full object-cover mr-4" />
                            <div>
                                <p className="text-lg font-medium text-gray-900">{item.name}</p>
                                <p className="text-gray-600 dark:text-gray-400">₹{item.price}</p>
                                
                </div>
                <p className="mx-4">Qty: {item.quantity}</p>
                    <button onClick={() => increaseQuantity(item.id)} className="text-lg font-semibold bg-blue-500 text-white px-2 rounded-full">+</button>
                        </div>
                        <button onClick={() => removeFromCart(item.id)} className="text-red-600 hover:text-red-800 text-2xl dark:hover:text-red-400 font-semibold"><MdDelete/></button>
                    </div>
                ))}
            </div>
           
            <div className="flex h-10vh justify-between items-center bg-inherit mt-6 sticky bottom-8">
                <span className="text-xl font-semibold text-gray-900 dark:text-white">Total: ₹{getTotalPrice().toFixed(2)}</span>
                <div className="flex space-x-4 mt-3">
                    <button onClick={toggleReviewPanel} className="bg-red-500 hover:bg-red-700 text-white  sm:text-base font-bold px-4 rounded t">
                        Close
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1  sm:text-base text-sm px-4 rounded">
                        Proceed to Checkout
                    </button>
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