"use client"
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MdDelete } from "react-icons/md";
import '../app/globals.css'
import Veg from "../img/1200px-Indian-vegetarian-mark.svg.png"
import NonVeg from "../img/245-2459071_non-veg-icon-non-veg-symbol-png.png"
import { FaStar } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import Cryptr from 'cryptr';
import { io } from "socket.io-client"
import { IoLocationSharp } from "react-icons/io5"
import { PiSlidersHorizontal } from "react-icons/pi";
import 'animate.css';
import Footer from '@/components/footer';
import { Image } from 'next/image';

const socket = io();
const Menu = () => {
    useEffect(() => {
    AOS.init();
  }, [])
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
    const [placeOrder,setOrder] = useState(false)


    function order(){
        return(
            setOrder(!placeOrder)
        )
    }
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
            <nav className='flex h-[25vh] items-center gap-2 justify-center flex-col'>
                <h1 className='text-4xl animate__animated animate__fadeIn text-center py-3 mx-3.5 font-bold'>Royal Food Mania</h1>
               <p className='animate__animated animate__fadeIn'>Veg-Non Veg | All Indian Cuisine | 24 Hrs Open</p>
               <div className='flex animate__animated animate__fadeIn gap-2 items-center mt-2'><p className='bg-green-500 flex gap-1  items-center text-white p-1 py-0.5 rounded-md'>4.3k <FaStar/></p><p className=' border-dashed border-b-2 pb-0.5 border-slate-500'>1K ratings</p></div>
               <p className='flex animate__animated animate__fadeIn justify-center items-center gap-2 py-1 px-2 my-3  bg-slate-100 rounded-3xl'><IoLocationSharp/>3km | Pune Locality</p>
            </nav>
            <div className='w-screen h-[30vh]'>
            <div className="relative w-full flex gap-4 py-6 overflow-x-auto">
	<Image className="h-48 aspect-video rounded-sm object-cover object-right dark:bg-gray-500" src={"https://content.jdmagicbox.com/comp/patna/h4/0612px612.x612.150726163015.d1h4/catalogue/the-food-mania-rukunpura-patna-fast-food-yjqnv9lka1.jpg"} alt="Image 1" />
	<Image className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src={"https://content.jdmagicbox.com/comp/patna/h4/0612px612.x612.150726163015.d1h4/catalogue/the-food-mania-rukunpura-patna-fast-food-pmus6rcrg0.jpg"} alt="Image 2" />
	<Image className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src={"https://b.zmtcdn.com/data/pictures/8/18485988/29c0234f3d764fd1d56aaf666a3593f0.jpg"} alt="Image 3" />
	<Image className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src={"https://b.zmtcdn.com/data/pictures/8/18485988/0999a28bfc6d64eec55acb91b935f93c.jpg"} alt="Image 4" />
	<Image className="h-48 aspect-video rounded-sm object-cover object-center dark:bg-gray-500" src={"https://b.zmtcdn.com/data/reviews_photos/b22/6f0d529d4e012c4e4a8f5cda1485bb22_1490806524.jpg?fit=around|750:500&crop=750:500;*,*"} alt="Image 5" />
</div>
            </div>
            <nav className='menunav m-3 overflow-x-scroll my-2 flex items-center'>
                <ul className='flex text-nowrap gap-3 overflow-x-scroll'>
                    <li><a className='text-sm text-zinc-900 flex px-2 py-1 rounded-xl my-2 bg-slate-200 items-center hover:text-zinc-700
                    active:text-zinc-950' href="."><PiSlidersHorizontal/> Filters</a></li>
                    <li><a className='text-sm text-zinc-900 flex px-2 py-1 rounded-xl my-2 bg-slate-200 items-center hover:text-zinc-700
                    active:text-zinc-950' href=".">Food</a></li>
                    <li><a className='text-sm text-zinc-900 flex px-2 py-1 rounded-xl my-2 bg-slate-200 items-center hover:text-zinc-700
                    active:text-zinc-950' href=".">Beverages</a></li>
                    <li><a className='text-sm text-zinc-900 flex px-2 py-1 rounded-xl my-2 bg-slate-200 items-center hover:text-zinc-700
                    active:text-zinc-950' href=".">Desserts</a></li>
                    <li><a className='text-sm text-zinc-900 flex px-2 py-1 rounded-xl my-2 bg-slate-200 items-center hover:text-zinc-700
                    active:text-zinc-950' href=".">Veg Specials</a></li>
                </ul>
                <div className='sticky right-0 bg-gradient-to-r from-slate-50/5 to-slate-100 text-2xl'><IoIosArrowForward className='bg-gradient-to-r from-slate-50/5 to-slate-100' /></div>
            </nav>
            <div className="grid md:grid-cols-4 sm:grid-cols-4 gap-4 p-4 ">
                {dishes.map(dish => (
                    <div key={dish.id} className={dish.veg?"sm:w-[80vw] w-[90vw] rounded-lg overflow-hidden items-center shadow-lg  m-auto sm:min-h-[15vh] sm:max-h-fit min-h-[15vh] ease-in max-h-fit flex bg-[#ebfffd] border-r-8 border-r-green-600":"sm:w-[80vw] w-[90vw] rounded-lg overflow-hidden items-center shadow-lg  m-auto sm:min-h-[15vh] sm:max-h-fit min-h-[15vh] ease-in max-h-fit flex bg-[#ebfffd] border-r-8 border-r-red-600"} data-aos='fade-up' onClick={() => handleDishClick(dish.id)}>
                        <Image
                            className="w-32 h-28 object-cover ml-1.5 rounded-lg"
                            src={dish.img}
                            alt={`Image of ${dish.name}`}
                        />
                        <div className='flex flex-col'>
                        <div className="pt-2  flex-grow flex flex-col justify-start w-full">
                            <div className="font-bold sm:text-xl w-full flex flex-col justify-start text-base overflow-hidden text-gray-900 text-left">
                                <div className="flex mx-3 w-full text-xl justify-start items-center text-left">
                                    
                                    {dish.name}
                                </div>
                            </div>
                            {selectedDishId === dish.id && (
                                <p className="border-gray-300 mx-3 text-xs">
                                    {dish.description}
                                </p>
                            )}
                        </div>
                        <div className="sm:px-6 px-2 w-full pb-4 flex flex-col justify-between">
                            <span className="inline-block text-semibold rounded-full ml-2 py-2 sm:text-xl text-sm">₹{dish.price}</span>
                            <button onClick={(e) => { e.stopPropagation(); addToCart(dish.id); }} className="bg-white text-[#b27154] font-semibold uppercase py-0.5 mx-2 px-3 rounded-lg border-[#b27154] border-[1px]">Add</button>
                        </div>
                    </div>
                    </div>

                ))}
            </div>
            {cart.length > 0 && (
                <div className='sticky bottom-5 w-screen flex justify-center'>
                    <div className="sticky inset-x-0 shadow-xl w-[95%] mt-10 rounded-2xl bottom-10 bg-[#faf7f0] border-yellow-900 border  text-gray-900 py-4 px-6 flex justify-between items-center space-x-4 z-50">
                        <div className='flex gap-4 text-sm sm:text-base'>
                            <span className='font-semibold'>Total Price:<span className='text-lg'> ₹{getTotalPrice().toFixed(2)}</span></span>
                        </div>
                        <div className='flex sm:gap-4 gap-2'><button onClick={toggleReviewPanel} className="bg-[#8a6240] hover:bg-[#4d2d18] text-white text-xs  sm:text-base font-bold  px-2 py-1  rounded">
                            Review
                        </button>
                            <button onClick={order} className="bg-[#8a6240] text-xs hover:bg-blue-700  sm:text-base text-white font-bold px-2 py-1 rounded ">
                                Place order
                            </button></div>
                    </div>
                </div>
            )}

            {showReview && (
                <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-md w-[90%] animate__animated animate__fadeIn">
                        <div className="px-6 py-8">
                            <h2 className="text-3xl font-bold mb-4 text-gray-900 text-center">Review Your Cart</h2>
                            <div className="divide-y divide-gray-200">
                                {cart.map((item, index) => (
                                    <div key={index} className="flex justify-between my-3 items-center py-4">
                                        <div className="flex items-center">
                                            <Image src={item.img} alt={item.name} className="h-16 w-16 rounded-xl object-cover mr-2" />
                                            <div className='flex'>
                                               <div> <p className="text-base font-semibold text-gray-900">{item.name}</p>
                                                <p className="text-gray-600 text-sm">₹{item.price}</p>
                                                <p className="mx-3">Qty: {item.quantity}</p>
                                                </div>
                                            </div>
                                           
                                            
                                        </div>
                                        <button onClick={() => removeFromCart(item.id)} className="text-red-600 hover:text-red-800 text-2xl dark:hover:text-red-400 font-semibold"><MdDelete /></button>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-gray-100 px-6 py-4 flex justify-between items-center">
                            <span className="text-xl font-semibold text-gray-900">Total: ₹{getTotalPrice().toFixed(2)}</span>
                            <div className="flex space-x-4">
                                <button onClick={toggleReviewPanel} className="bg-[#8a6240] hover:bg-red-600 text-white font-bold px-4 h-[4vh] rounded transition duration-300 ease-in-out">Close</button>
                                <button className="bg-[#8a6240] hover:bg-red-600 text-white font-bold px-4 h-[4vh] rounded transition duration-300 ease-in-out" onClick={sendMenuOrder(cart)}>Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

{placeOrder && (
                <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-md w-full animate__animated animate__fadeIn">
                        <div className="px-6 py-8">
                            <h2 className="text-3xl font-bold mb-4 text-gray-900 text-center">Review Your Cart</h2>
                            <div className="divide-y divide-gray-200">
                                {cart.map((item, index) => (
                                    <div key={index} className="flex justify-between my-3 items-center py-4">
                                        <div className="flex items-center">
                                            <Image src={item.img} alt={item.name} className="h-16 w-16 rounded-xl object-cover mr-4" />
                                            <div>
                                                <p className="text-lg font-semibold text-gray-900">{item.name}</p>
                                                <p className="text-gray-600">₹{item.price}</p>
                                            </div>
                                            <p className="mx-4 text-lg">{item.quantity}</p>
                                            
                                        </div>
                                        <button onClick={() => removeFromCart(item.id)} className=" text-2xl dark:hover:text-red-400 font-semibold"><MdDelete /></button>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-gray-100 px-6 py-4 flex justify-between items-center">
                            <span className="text-xl font-semibold text-gray-900">Total: ₹{getTotalPrice().toFixed(2)}</span>
                            <div className="flex space-x-4">
                                <button onClick={opener} className="bg-[#8a6240] h-[65%] text-white font-bold px-4 py-1 text-sm rounded transition duration-300 ease-in-out">Close</button>
                                <button className="bg-[#8a6240] hover:bg-blue-600 text-white h-[65%] font-bold px-4 py-1 rounded text-sm transition duration-300 ease-in-out" onClick={sendMenuOrder(cart)}>Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <Footer/>
  </div>
  
    );
};

export default function Searchbar() {
    return (
        <Suspense>
            <Menu />
        </Suspense>
    )
}