"use client"
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { MdTableRestaurant } from "react-icons/md";
import { SlUser } from "react-icons/sl";
import { HiUserGroup } from "react-icons/hi2";
import { PiNotePencilBold } from "react-icons/pi";
import { BiDish } from "react-icons/bi";
const SelectMenu = ({ menu, onMenuItemSelect, addToOrder, isOpenMenu }) => {

  const [selectedTab, setSelectedTab] = useState(1);
  const [dishes, setDishes] = useState([]);
  const [selectCatagory, setCategory] = useState(menu[0].catagory);
  const handleCategorySelect = (cat) => {
    setCategory(cat)
  }
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

  const handleItemClick = (name, category, price) => {
    const selectedItemIndex = selectedItems.findIndex(item => item.name === name && item.category === category && item.price === price);
    if (selectedItemIndex !== -1) {
      const updatedItems = [...selectedItems];
      updatedItems[selectedItemIndex].quantity++;
      setSelectedItems(updatedItems);
    } else {
      const newItem = { name, category, price, quantity: 1 };
      setSelectedItems([...selectedItems, newItem]);
    }
  };
  return (

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
        <div className="w-[15vw] h-[92vh] overflow-y-scroll">
          <ul className="text-white font-semibold">
            {menu.map((menuItem, index) => (

              <div key={index} className="p-4 px-1 flex justify-center items-center bg-gray-800" onClick={() => handleCategorySelect(menuItem.catagory)}>{menuItem.catagory}</div>

            ))}
            <li className="p-4 px-1 flex justify-center items-center bg-gray-800">Favourite Items</li>
            <li className="p-4 px-1 flex justify-center items-center bg-gray-800">Favourite Items</li>
            <li className="p-4 px-1 flex justify-center items-center bg-gray-800">Beverages</li>
            <li className="p-4 px-2 flex justify-center items-center bg-gray-800">Burgers</li>
            <li className="p-4 px-2 flex justify-center items-center bg-gray-800">EGGS</li>
            <li className="p-4 px-2 flex justify-center items-center bg-gray-800">Chicken</li>
            <li className="p-4 px-2 flex justify-center items-center bg-gray-800">Chakhna</li>
            <li className="p-4 px-2 flex justify-center items-center bg-gray-800">Chinese Snacks</li>
            <li className="p-4 px-2 flex justify-center items-center bg-gray-800">Chinese Soups</li>
            <li className="p-4 px-2 flex justify-center items-center bg-gray-800">Garlic Bread</li>
            <li className="p-4 px-2 flex justify-center items-center bg-gray-800">Gravy Items</li>
            <li className="p-4 px-2 flex justify-center items-center bg-gray-800">Hawaiian Wraps</li>
            <li className="p-4 px-2 flex justify-center items-center bg-gray-800">Maggie Lovers</li>
            <li className="p-4 px-2 flex justify-center items-center bg-gray-800">Italian</li>
            <li className="p-4 px-2 flex justify-center items-center bg-gray-800">Japanese</li>
            <li className="p-4 px-2 flex justify-center items-center bg-gray-800">European</li>
            <li className="p-4 px-2 flex justify-center items-center bg-gray-800">Diet Food</li>
          </ul>
        </div>
        <div className='w-[40vw] bg-gray-200 '>
          <div className='flex flex-wrap h-fit'>
            
            {menu
              .filter((menuItem) => menuItem.catagory === selectCatagory) // Filter menu items based on selected category
              .map((categoryMenu) => (
                categoryMenu.menuItems.map((menuItem, index) => (
                  <div key={index} className={menuItem.veg ? " border-l-4 flex justify-center py-3 px-3 m-2 bg-white border-green-500 h-20" : "border-l-4 bg-white border-red-500 py-3 px-3 flex justify-center h-20 m-2"}><a className='p-4' href=".">{menuItem.menuItem}</a></div>
                ))
              ))}
          </div>
        </div>
        <div className='w-[45vw]'>
          <div className='w-full  mt-2 flex justify-between'>
            <div className='flex'>
              <button className='p-3 border mx-1'> <span className='text-3xl'><MdTableRestaurant /></span></button>
              <button className='p-3 border mx-1'> <span className='text-3xl'><SlUser /></span></button>
              <button className='p-3 border mx-1'> <span className='text-3xl'><HiUserGroup /></span></button>
              <button className='p-3 border mx-1'> <span className='text-3xl'><PiNotePencilBold /></span></button>
              <button className='p-3 border mx-1'> <span className='text-3xl'><BiDish /></span></button>
            </div>
            <div className='flex justify-center items-center bg-yellow-400 px-2 mx-2'>
              Ground floor
            </div>
          </div>
          <div>
            <h2>Selected Items</h2>

          </div>
        </div>
      </div>
    </div>
  )
}
export default SelectMenu