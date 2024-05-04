"use client"
import React, { useState } from 'react';
import Image from 'next/image';

const MenuItems = ({ menu, onMenuItemSelect, addToOrder,isOpenMenu }) => {
  const [selectedCategory, setSelectedCategory] = useState('default');
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleScroll = (direction) => {
    const itemWidth = 80;
    const scrollAmount = direction === 'left' ? -itemWidth : itemWidth;
    setScrollPosition((prevScrollPosition) => prevScrollPosition + scrollAmount);
  };

  return (
    <div>
      <div className="relative overflow-hidden h-20">
        <button
          className="absolute left-0 top-1/2 h-20 transform -translate-y-1/2 py-2 px-4 bg-gray-200 rounded-l cursor-pointer z-10"
          onClick={() => handleScroll('left')}
        >
          -
        </button>
        <div className="flex gap-10 left-16" style={{ transform: `translateX(-${scrollPosition}px)` }}>
          {menu.map((menuItem, index) => (
            <div key={index} className="h-20 bg-zinc-600 justify-center p-auto text-white w-20 flex-none py-2 px-4 cursor-pointer rounded-xl flex">
              <div className="m-auto" onClick={() => handleCategorySelect(menuItem.catagory)}>{menuItem.catagory}</div>
            </div>
          ))}
        </div>
        <button
          className="absolute right-0 h-20 top-1/2 transform -translate-y-1/2 py-2 px-4 bg-gray-200 rounded-r cursor-pointer z-10"
          onClick={() => handleScroll('right')}
        >
          +
        </button>
      </div>

      <div className="rounded-md text-white mt-2 mr-2">
        <ul className="grid gap-5 grid-cols-3 w-full h-[10vh] p-4 cursor-pointer">
          {menu
            .filter((menuItem) => menuItem.catagory === selectedCategory) // Filter menu items based on selected category
            .map((categoryMenu) => (
              categoryMenu.menuItems.map((menuItem, index) => (
                <li key={index} className="bg-gray-800 flex h-[90px] rounded-xl border-r-8 border-red-600 hover:bg-gray-700 font-bold" onClick={()=>{onMenuItemSelect(menuItem);addToOrder()}}>
                  <Image className="rounded-xl" src="/profile.jpg" height={115} width={115} alt="img" />
                  <div className="flex flex-col">
                    <div className="font-bold pl-3 pt-1">{menuItem.menuItem}</div>
                    <div className="font-bold pl-3 ">{menuItem.price}</div>
                  </div>
                </li>
              ))
            ))}
          <li className="bg-gray-800 flex justify-center items-center h-[90px] rounded-xl border-r-8 border-red-600 hover:bg-gray-700 font-bold" onClick={isOpenMenu(selectedCategory)}>
            Add Menu
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuItems;
