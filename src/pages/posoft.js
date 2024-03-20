// pages/posoftware.tsx
"use client"
import "../app/globals.css"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MenuItems from '@/components/menu';
import Table from "@/components/table";
import OrderedItems from '@/components/order';
import NavBar from '@/components/navbar';
import SearchBar from '@/components/searchBar';
export default function POSoftware() {
  const [tables, setTables] = useState([]);
  const [menu, setMenu] = useState([]);
  const [selectedTable, setSelectedTable] = useState(null);
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  const [selectedMenuItemPrice, setSelectedMenuItemPrice] = useState("");
  const [orderedItems, setOrderedItems] = useState([]);
  const [orderType, setOrderType] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [category, setCategory] = useState('');
  const [number, setNumber] = useState('');
  const [menuCat, setMenuCat] = useState(null);
  const [menuName, setMenuName] = useState("");
  const [Menudec, setMenudec] = useState("")
  const [menuPrice, setMenuPrice] = useState(0)

  useEffect(() => {
    console.log(isOpenMenu);
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('No token found');
        }
        const response = await axios.get('/api/getUser', { headers: { Authorization: token } });
        console.log(response);
        setTables(response.data.user.tables);
        setMenu(response.data.user.menu)
        // console.log(tables)
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };
    function generateBearerToken(username, password, projectId) {
      const credentials = `${username}:${password}:${projectId}`;

      const bearerToken = btoa(credentials);

      return bearerToken;
    }

    const username = "pranavhole02@gmail.com";
    const password = "somerandompassword";
    const projectId = "65ebe1b9e47c8119c5ed6623";

    const bearerToken = generateBearerToken(username, password, projectId);
    console.log("Bearer Token:", bearerToken);

    fetchUser();
  }, []);

  const handleTableSelect = (table) => {
    setSelectedTable(table);
    setSelectedMenuItem(null);
    setOrderType(null); // Reset order type when table is selected
  };
  const handleOpenPopup = () => {
    setIsOpen(true);
  };

  const handleClosePopup = () => {
    setIsOpen(false);
    // Reset input values
    setCategory('');
    setNumber('');
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  };

  const handleAddTable = async () => {
    console.log("Category:", category, "Number:", number);
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No token found');
      }
      const response = await axios.post(
        '/api/Table/addTable',
        { category, number }, // Correctly pass data as the second argument
        { headers: { authorization: token } } // Pass headers as the third argument
      );
      console.log(response);
      // setTables(response.data.user.tables);

    } catch (error) {
      console.error('Error fetching user:', error);
    }
    setCategory('');
    setNumber('');
    setIsOpen(false);
  };

  const handleMenuItemSelect = (menuItem) => {
    setSelectedMenuItem(menuItem);
  };

  const handleAddToOrder = () => {
    console.log(selectedMenuItem);
    if (selectedMenuItem) {
      const existingItemIndex = orderedItems.findIndex(
        (item) => item.menuItem.id === selectedMenuItem.id
      );
      if (existingItemIndex !== -1) {
        const updatedOrderedItems = [...orderedItems];
        updatedOrderedItems[existingItemIndex].quantity++;
        setOrderedItems(updatedOrderedItems);
      } else {
        setOrderedItems([
          ...orderedItems,
          { menuItem: selectedMenuItem, quantity: 1 },
        ]);
      }
    }
  };
  const handleBilling = async () => {
    try {
      const response = await axios.post('/api/order', { orderedItems });
    } catch (error) {
      console.error('Billing failed:', error);
    }
  };
  const handleRemoveFromOrder = (index) => {
    const updatedOrderedItems = [...orderedItems];
    updatedOrderedItems.splice(index, 1);
    setOrderedItems(updatedOrderedItems);
  };

  const handlePrintBill = () => {
    // Function to print bill
    if (orderedItems.length === 0) {
      console.log("No items ordered.");
      return;
    }

    console.log("Bill:");
    console.log("Table: ", selectedTable.name); // Assuming 'name' is a property of the Table object
    console.log("------------------------------");
    console.log("Ordered Items:");
    orderedItems.forEach((item, index) => {
      console.log(`${index + 1}. ${item.menuItem.name} - Quantity: ${item.quantity} - Price: ${item.menuItem.price * item.quantity}`);
    });
    console.log("------------------------------");
    const totalPrice = orderedItems.reduce((acc, item) => acc + (item.menuItem.price * item.quantity), 0);
    console.log("Total Price: ", totalPrice);
  };

  const handleSelectOrderType = (type) => {
    setOrderType(type);
  };
  const addTableToDb = () => {
    let table = { tableNumber: tableNum, status: "Empty" };
    axios.post("/api/tables", table).then((res) => { console.log("added") })
  }
  const changeTable = () => {
    setSelectedTable(null);
  }
  const handleAddMenu = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No token found');
      }
      const response = await axios.post(
        '/api/Menu/addItem',
        { category: menuCat, name: menuName, price: menuPrice, description: Menudec }, // Correctly pass data as the second argument
        { headers: { authorization: token } } // Pass headers as the third argument
      );
      console.log(response);
    } catch (error) {
      console.error('Error fetching user:', error);
    }
    setNumber('');
    setIsOpenMenu(false);
  }
  const handleOpenPopupMenu = (cat) => {
    setMenuCat(cat)
    setIsOpenMenu(true);
  }
  const handleClosePopupMenu = () => {
    setIsOpenMenu(false);
  }
  return (
    <div>
      <NavBar />
      <div className="flex">
        <div className='flex bg-neutral-900 w-2/3 h-[100vh] flex-col'>
          <SearchBar onchangeTable={changeTable} onSelectTable={selectedTable} handleOpenPopup={handleOpenPopup} handleClosePopup={handleClosePopup} />
          {!selectedTable ? (<Table tables={tables} onSelectTable={handleTableSelect} />) : (<MenuItems menu={menu} onMenuItemSelect={handleMenuItemSelect} addToOrder={handleAddToOrder} isOpenMenu={handleOpenPopupMenu} />)}
        </div>
        <OrderedItems
          onBilling={handleBilling}
          tableNumber={selectedTable ? selectedTable.number : null}
          orderedItems={orderedItems}
          onMenuItemSelect={handleMenuItemSelect}
          addToOrder={handleAddToOrder}
          onRemoveFromOrder={handleRemoveFromOrder}
          onPrintBill={handlePrintBill}
          onSelectOrderType={handleSelectOrderType}
        />
      </div>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <span className="absolute top-0 right-0 cursor-pointer text-gray-600 hover:text-gray-800" onClick={handleClosePopup}>&times;</span>
            <input type="text" placeholder="Category" value={category} onChange={handleCategoryChange} className="block mb-4 w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
            <input type="text" placeholder="Number" value={number} onChange={handleNumberChange} className="block mb-4 w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
            <button onClick={handleAddTable} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Add
            </button>
          </div>
        </div>
      )}
      {/* {isOpenMenu && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <span className="absolute top-0 right-0 cursor-pointer text-gray-600 hover:text-gray-800" onClick={handleClosePopupMenu}>&times;</span>
            <input type="text" placeholder="Category" value={menuCat} onChange={(e) => setMenuCat(e.target.value)} className="block mb-4 w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
            <input type="text" placeholder="name" value={menuName} onChange={(e) => setMenuName(e.target.value)} className="block mb-4 w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
            <input type="text" placeholder="description" value={Menudec} onChange={(e) => setMenudec(e.target.value)} className="block mb-4 w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
            <input type="text" placeholder="Price" value={menuPrice} onChange={(e) => setMenuPrice(e.target.value)} className="block mb-4 w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
            <button onClick={handleAddMenu} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Add
            </button>
          </div>
        </div>
      )} */}
    </div>
  );
};



// <Tables tables={tables} onTableSelect={handleTableSelect} addTable={addTableToDb} />
//         <MenuItems
//           menuItems={menuItems}
//           onMenuItemSelect={handleMenuItemSelect}
//           onOrder={handleAddToOrder}
//         />
//         <OrderedItems
// onBilling={handleBilling}
// tableNumber={selectedTable ? selectedTable.id : null}
// orderedItems={orderedItems}
// onRemoveFromOrder={handleRemoveFromOrder}
// onPrintBill={handlePrintBill}
// onSelectOrderType={handleSelectOrderType}
//         />