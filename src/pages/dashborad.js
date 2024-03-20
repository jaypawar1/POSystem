"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { redirect } from 'next/navigation';

const Dashboard = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [tables, setTables] = useState([]);
  const [token, setToken] = useState('');
  const [newMenuItem, setNewMenuItem] = useState('');
  const [newMenuItemPrice, setNewMenuItemPrice] = useState('');
  const [newMenuItemCategory, setNewMenuItemCategory] = useState('');
  const [newMenuItemDesc, setNewMenuItemDesc] = useState('');
  const [newTableNumber, setNewTableNumber] = useState('');

  useEffect(() => {
    let Id= localStorage.getItem("token");
    
    setToken(Id);
  }, []);

  const addCategory = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/Menu/addCategory', {category: newMenuItemCategory }, {
        headers: { Authorization: token }
      });
      console.log('Menu added successfully:', response.data);
      setNewMenuItemCategory('');
    } catch (error) {
      console.error('Error adding menu:', error.response.data);
    }
  };
  const addMenuItem= async(e)=>{
    e.preventDefault();
    try{
      const response = await axios.post('/api/Menu/addItem', {category: newMenuItemCategory , name: newMenuItem, price: newMenuItemPrice, description: newMenuItemDesc }, {
        headers: { Authorization: token }
      });
      console.log('Menu added successfully:', response.data);
    }catch(error){
      console.log(error);
    }
  };
  const addTable = async () => {
    try {
      await axios.post('/api/addTable', { number: newTableNumber });
      fetchTables();
      setNewTableNumber('');
    } catch (error) {
      console.error('Error adding table:', error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Add Menu Item</h2>
      <form onSubmit={addCategory} className="mb-4">
        <input type="text" value={newMenuItemCategory} onChange={(e) => setNewMenuItemCategory(e.target.value)} placeholder="Category" required className="border border-gray-300 rounded px-4 py-2 mr-2" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Menu Item</button>
      </form>
      <form onSubmit={addMenuItem} className="mb-4">
        <input type="text" value={newMenuItem} onChange={(e) => setNewMenuItem(e.target.value)} placeholder="Name" required className="border border-gray-300 rounded px-4 py-2 mr-2" />
        <input type="number" value={newMenuItemPrice} onChange={(e) => setNewMenuItemPrice(e.target.value)} placeholder="Price" required className="border border-gray-300 rounded px-4 py-2 mr-2" />
        <input type="text" value={newMenuItemCategory} onChange={(e) => setNewMenuItemCategory(e.target.value)} placeholder="Category" required className="border border-gray-300 rounded px-4 py-2 mr-2" />
        <input type="text" value={newMenuItemDesc} onChange={(e) => setNewMenuItemDesc(e.target.value)} placeholder="Description" required className="border border-gray-300 rounded px-4 py-2 mr-2" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Menu Item</button>
      </form>
      <h2 className="text-2xl font-bold mb-4">Add Table</h2>
      <div className="mb-4">
        <input type="number" value={newTableNumber} onChange={(e) => setNewTableNumber(e.target.value)} placeholder="Table Number" required className="border border-gray-300 rounded px-4 py-2 mr-2" />
        <button onClick={addTable} className="bg-blue-500 text-white px-4 py-2 rounded">Add Table</button>
      </div>

      <h2 className="text-2xl font-bold mb-4">Menu Items</h2>
      <ul>
        {Object.values(menuItems).map((menuItem, index) => (
          <li key={index} className="mb-4 border border-gray-300 rounded p-4">
            <p className="font-bold">Name: {menuItem.name}</p>
            <p>Category: {menuItem.category}</p>
            <p>Price: {menuItem.price}</p>
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold mb-4">Tables</h2>
      <ul>
        {tables.map((table, index) => (
          <li key={index} className="mb-4 border border-gray-300 rounded p-4">Table {table.number}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
