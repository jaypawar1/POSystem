"use client"
import React, { useState } from 'react';

const Table = ({ tables, onSelectTable }) => {
  const [selectedCategory, setSelectedCategory] = useState('default');
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleScroll = (direction) => {
    const itemWidth = 80;
    const scrollAmount = direction === 'left' ? -itemWidth : itemWidth;
    setScrollPosition(prevScrollPosition => prevScrollPosition + scrollAmount);
    console.log(scrollPosition);
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
          {tables.map((table, index) => (
            <div key={index} className="h-20 bg-zinc-600 justify-center p-auto text-white w-20 flex-none py-2 px-4 cursor-pointer rounded-xl flex">
              <div className="m-auto" onClick={() => handleCategorySelect(table.catagory)}>{table.catagory}</div>
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
      <div className='rounded-md text-white mt-2 mr-2'>
        <ul className='grid gap-5 grid-cols-3 w-[100%] h-[10vh] p-4 cursor-pointer'>
          {tables
            .filter((table) => table.catagory === selectedCategory)
            .map((categoryTable) => (
              <li key={categoryTable._id}>
                {/* Render each table in the selected category */}
                {categoryTable.table.map((tableItem) => (
                  <div key={tableItem._id} onClick={() => onSelectTable(tableItem)}>
                    Table Number: {tableItem.number}, Status: {tableItem.status}
                  </div>
                ))}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Table;
