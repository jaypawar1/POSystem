import React, { useState } from 'react';

function AddTable() {
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState('');
  const [number, setNumber] = useState('');

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

  const handleAddTable = () => {
    // Add table logic here
    console.log("Category:", category, "Number:", number);
    // Reset input values
    setCategory('');
    setNumber('');
    // Close the popup
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpenPopup}>Add Table</button>
      {isOpen && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={handleClosePopup}>&times;</span>
            <input type="text" placeholder="Category" value={category} onChange={handleCategoryChange} />
            <input type="text" placeholder="Number" value={number} onChange={handleNumberChange} />
            <button onClick={handleAddTable}>Add</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddTable;
