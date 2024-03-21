"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MdDelete } from "react-icons/md";
import '../app/globals.css'

const Menu = () => {
    const [dishes, setDishes] = useState([]);
    const [cart, setCart] = useState([]);
    const [showReview, setShowReview] = useState(false);

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
    

    return (
        <div className='bg-[#faf7f0] min-h-screen'>
            <h1 className='text-4xl text-center py-5 font-extrabold'>Menu</h1>
            <div className="grid md:grid-cols-4 sm:grid-cols-4 gap-4 p-4 ">
                {dishes.map(dish => (
                    <div key={dish.id} className="w-[20vw] rounded-3xl overflow-hidden justify-center items-center shadow-lg  border-gray-900 border-[2px]  m-auto h-[55vh] flex flex-col">
                        <img className="w-[90%] h-40 mt-5 rounded-xl  object-cover" src={dish.img} alt={`Image of ${dish.name}`} />
                        <div className="px-6 py-4 flex-grow">
                            <div className="font-bold text-xl mb-2 text-gray-900 ">{dish.name}</div>
                            <p className="border-gray-300 text-base">
                                {dish.description}
                            </p> 
                        </div>
                        <div className="px-6 w-full pb-4 flex justify-between items-center">
                            <span className="inline-block  rounded-full px-3 py-1 text-xl font-semibold text-gray-900">₹{dish.price }</span>
                            <button onClick={() => addToCart(dish.id)} className="bg-transparent text-gray-900 font-bold py-2 px-4 rounded-3xl border-gray-900 border">Add</button>
                        </div>
                    </div>
                ))}
            </div>
            {cart.length > 0 && (
                <div className="sticky inset-x-0 shadow-xl rounded-e-lg bottom-0 bg-[#faf7f0] text-gray-900 py-4 px-6 flex justify-between items-center space-x-4 z-50">
                    <div className='flex gap-4'>
                    <span>Total Price: ₹{getTotalPrice().toFixed(2)}</span>
                        <span>Total Items: {cart.length}</span>
                  </div>  
                   <div className='flex gap-4'><button onClick={toggleReviewPanel} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                        Review Items
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Checkout
                    </button></div> 
                </div>
            )}

{showReview && (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center h-screen">
        <div className="bg-[#faf7f0] p-5 rounded-lg shadow-lg max-w-2xl w-full max-h-[75vh]  overflow-y-scroll">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 ">Review Your Cart</h2>
            <div className="divide-y divide-gray-200">
                {cart.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-4">
                        <div className="flex items-center">
                            <img src={item.img} alt={item.name} className="h-16 w-16 rounded-full object-cover mr-4" />
                            <div>
                                <p className="text-lg font-medium text-gray-900">{item.name}</p>
                                <p className="text-gray-600 dark:text-gray-400">₹{item.price}</p>
                                
                </div>
                <p className="mx-4">Qty: {item.quantity}</p>
                    <button onClick={() => increaseQuantity(item.id)} className="text-lg font-semibold bg-blue-500 text-white px-2 py-1 rounded">+</button>
                        </div>
                        <button onClick={() => removeFromCart(item.id)} className="text-red-600 hover:text-red-800 text-2xl dark:hover:text-red-400 font-semibold"><MdDelete/></button>
                    </div>
                ))}
            </div>
           
            <div className="flex h-10vh justify-between items-center bg-inherit mt-6 sticky bottom-8">
                <span className="text-xl font-semibold text-gray-900 dark:text-white">Total: ₹{getTotalPrice().toFixed(2)}</span>
                <div className="flex space-x-4">
                    <button onClick={toggleReviewPanel} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        Close
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
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

export default Menu;