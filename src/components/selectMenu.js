"use client"
import axios from 'axios';
import React, { useState,useEffect} from 'react';
import { MdTableRestaurant } from "react-icons/md";
import { SlUser } from "react-icons/sl";
import { HiUserGroup } from "react-icons/hi2";
import { PiNotePencilBold } from "react-icons/pi";
import { BiDish } from "react-icons/bi";
 const SelectMenu = () => {

    const [selectedTab, setSelectedTab] = useState(1);
    const [dishes, setDishes] = useState([]);
    const [selectedMethod, setSelectedMethod] = useState('');

    const handleMethodChange = (e) => {
      setSelectedMethod(e.target.value);
    };
    


    const handleTabChange = (tab) => {
      setSelectedTab(tab);
    };

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

   
    return(
        
        <div className="w-screen min-h-screen">
           <div className="w-screen h-[8vh] flex">
           <header className="bg-gray-800 text-white h-full flex justify-between items-center w-screen">
      <div className="flex space-x-4 items-center">
        
        <select className="bg-gray-700 text-white px-3 py-2 ml-2 w-[14vw] rounded">
          <option>Fast food</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>

       
        <input type="text" placeholder="Search Item" className="bg-gray-700 text-white px-3 py-2 rounded" />
        <input type="text" placeholder="Short Code" className="bg-gray-700 text-white px-3 py-2 rounded" />
      </div>

      
      <div className="flex h-full">
        <button
          className={`px-4 h-full py-2 w-[10vw]  ${selectedTab === 1 ? 'bg-blue-600' : 'bg-gray-700'}`}
          onClick={() => handleTabChange(1)}
        >
          Dine In
        </button>
        <button
          className={`px-4 h-full py-2 w-[10vw] ${selectedTab === 2 ? 'bg-blue-600' : 'bg-gray-700'}`}
          onClick={() => handleTabChange(2)}
        >
          Delivery
        </button>
        <button
          className={`px-4 h-full py-2 w-[10vw] ${selectedTab === 3 ? 'bg-blue-600' : 'bg-gray-700'}`}
          onClick={() => handleTabChange(3)}
        >
          Pick Up
        </button>
      </div>
    </header>
            </div> 
            <div className='flex'>
            <div  className="w-[15vw] h-[92vh] overflow-y-scroll">
                <ul className="text-white font-semibold">
                <a href="."><li className="p-4 px-1 flex justify-center items-center bg-gray-800">Favourite Items</li></a>
                <a href="."><li className="p-4 px-1 flex justify-center items-center bg-gray-800">Beverages</li></a>
                <a href="."><li className="p-4 px-2 flex justify-center items-center bg-gray-800">Burgers</li></a>
                <a href="."><li className="p-4 px-2 flex justify-center items-center bg-gray-800">EGGS</li></a>
                <a href="."><li className="p-4 px-2 flex justify-center items-center bg-gray-800">Chicken</li></a>
                <a href="."><li className="p-4 px-2 flex justify-center items-center bg-gray-800">Chakhna</li></a>
                <a href="."><li className="p-4 px-2 flex justify-center items-center bg-gray-800">Chinese Snacks</li></a>
                <a href="."><li className="p-4 px-2 flex justify-center items-center bg-gray-800">Chinese Soups</li></a>
                <a href="."><li className="p-4 px-2 flex justify-center items-center bg-gray-800">Garlic Bread</li></a>
                <a href="."><li className="p-4 px-2 flex justify-center items-center bg-gray-800">Gravy Items</li></a>
                <a href="."><li className="p-4 px-2 flex justify-center items-center bg-gray-800">Hawaiian Wraps</li></a>
                <a href="."><li className="p-4 px-2 flex justify-center items-center bg-gray-800">Maggie Lovers</li></a>
                <a href="."><li className="p-4 px-2 flex justify-center items-center bg-gray-800">Italian</li></a>
                <a href="."><li className="p-4 px-2 flex justify-center items-center bg-gray-800">Japanese</li></a>
                <a href="."><li className="p-4 px-2 flex justify-center items-center bg-gray-800">European</li></a>
                <a href="."><li className="p-4 px-2 flex justify-center items-center bg-gray-800">Diet Food</li></a>
                </ul>
            </div>
            <div className='w-[40vw] bg-gray-200 '> 
            <div className='flex flex-wrap h-fit'>
            {dishes.map(dish=>(
                <div key={dish.id} className={dish.veg?" border-l-4 flex justify-center py-3 px-3 m-2 bg-white border-green-500 h-20":"border-l-4 bg-white border-red-500 py-3 px-3 flex justify-center h-20 m-2"}><a className='p-4' href=".">{dish.name}</a></div>
            ))}
            </div>
            </div>
            <div className='w-[45vw]'>
                <div className='w-full  mt-2 flex justify-between'>
                    <div className='flex'>
                       <button className='p-3 border mx-1'> <span className='text-3xl'><MdTableRestaurant/></span></button>
                       <button className='p-3 border mx-1'> <span className='text-3xl'><SlUser/></span></button>
                       <button className='p-3 border mx-1'> <span className='text-3xl'><HiUserGroup/></span></button>
                       <button className='p-3 border mx-1'> <span className='text-3xl'><PiNotePencilBold/></span></button>
                       <button className='p-3 border mx-1'> <span className='text-3xl'><BiDish/></span></button>
                    </div>
                    <div className='flex justify-center items-center bg-yellow-400 px-2 mx-2'>
                        Ground floor
                    </div>
                </div>
                <div className='w-full bg-gray-300'>
                <table className="min-w-full divide-y divide-gray-200">
  <thead className="bg-gray-50">
    <tr>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item</th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
    </tr>
  </thead>
  <tbody className="bg-white divide-y divide-gray-200">
    {dishes.slice(0, 6).map(dish => (
      <tr key={dish.id}>
        <td className="px-6 py-4 whitespace-nowrap">{dish.name}</td>
        <td className="px-6 py-4 whitespace-nowrap">1</td> 
        <td className="px-6 py-4 whitespace-nowrap">{dish.price}</td>
      </tr>
    ))}
  </tbody>
</table>
<div className='flex justify-between items-center'>
    <div className='flex items-center'>
    <button className='px-2 py-1 rounded m-1 border'>Bogo Offer</button>
    <button className='px-2 py-1 m-1 rounded border'>Split</button>
    <span className='text-sm flex items-center gap-2'><input type="checkbox"/>Complimentary</span>
    </div>
    Total : 2304
</div>
<div className="flex items-center space-x-4">
      <label className="inline-flex items-center">
        <input
          type="radio"
          value="credit_card"
          checked={selectedMethod === 'credit_card'}
          onChange={handleMethodChange}
          className="form-radio h-5 w-5 text-indigo-600"
        />
        <span className="ml-2">Cash</span>
      </label>

      <label className="inline-flex items-center">
        <input
          type="radio"
          value="paypal"
          checked={selectedMethod === 'paypal'}
          onChange={handleMethodChange}
          className="form-radio h-5 w-5 text-indigo-600"
        />
        <span className="ml-2">Card</span>
      </label>

      <label className="inline-flex items-center">
        <input
          type="radio"
          value="apple_pay"
          checked={selectedMethod === 'apple_pay'}
          onChange={handleMethodChange}
          className="form-radio h-5 w-5 text-indigo-600"
        />
        <span className="ml-2">Due</span>
      </label>

      <label className="inline-flex items-center">
        <input
          type="radio"
          value="google_pay"
          checked={selectedMethod === 'google_pay'}
          onChange={handleMethodChange}
          className="form-radio h-5 w-5 text-indigo-600"
        />
        <span className="ml-2">Other</span>
      </label>

      <label className="inline-flex items-center">
        <input
          type="radio"
          value="bank_transfer"
          checked={selectedMethod === 'bank_transfer'}
          onChange={handleMethodChange}
          className="form-radio h-5 w-5 text-indigo-600"
        />
        <span className="ml-2">Part</span>
      </label>
    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
export default SelectMenu