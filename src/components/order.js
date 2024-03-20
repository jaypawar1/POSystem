import React from 'react';

const OrderedItems = ({ orderedItems,onMenuItemSelect,addToOrder, onRemoveFromOrder, tableNumber }) => {
  console.log(orderedItems);
  return (
    <div className='w-[33vw] pt-2 bg-gray-800'>
      <div className='w-[100%] h-10 flex rounded-sm gap-[2px] justify-center'>
        <button className=' rounded-l-xl bg-black text-white text-sm font-light py-2 px-1 flex'>
          <span>Table No.: {tableNumber} </span>
        </button>
        <button className=' bg-black text-white text-sm font-light py-2 px-1 flex'>
          <span>Person count: </span> <input className='bg-black w-10' type='text' />
        </button>
        <button className=' bg-black text-white text-sm font-light py-2 px-1 flex'>
          <span>Customer Name </span> <input className='bg-black w-10' type='text' />
        </button>
        <button className=' rounded-r-xl bg-black text-white text-sm font-light py-2 px-1 flex'>
          <span>Mobile Number </span> <input className='bg-black w-10' type='text' />
        </button>
      </div>

      <div className='w-[100%] h-10 flex border-b-2 border-zinc '>
        <button className=' text-white px-5 py-2'>Dine-In</button>
        <button className=' text-white px-5 py-2'>Pickup</button>
        <button className=' text-white px-5 py-2'>Quick Bill</button>
      </div>

      <table className='w-full border-collapse border border-gray-200'>
        <thead>
          <tr className='bg-gray-100 text-sm'>
            <th className='border border-gray-200 px-4 py-2'>Item</th>
            <th className='border border-gray-200 px-4 py-2'>Price</th>
            <th className='border border-gray-200 px-4 py-2'>Qnt.</th>
            <th className='border border-gray-200 px-4 py-2'>Total</th>
          </tr>
        </thead>
        <tbody>
          {orderedItems.map((orderedItem, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className='border border-gray-200 px-4 py-2'>{orderedItem.menuItem.menuItem}</td>
              <td className='border border-gray-200 px-4 py-2'>{orderedItem.menuItem.price}</td>
              <td className='border border-gray-200 px-4 py-2 justify-between flex'>
                <span>-</span>
                {orderedItem.quantity}
                <span className="cursor-pointer" onClick={()=>{onMenuItemSelect(orderedItem.menuItem);addToOrder()}}>+</span>
              </td>
              <td className='border border-gray-200 px-4 py-2'>{orderedItem.quantity*orderedItem.menuItem.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className='flex '>
        <div className='flex-1'></div>
        <div className='flex-1'>
          <div className='flex justify-between'>
            <div>Sub Total</div>
            <div>200</div>
          </div>
          <div className='flex justify-between'>
            <div>Tax</div>
            <div>200</div>
          </div>
          <div className='flex justify-between'>
            <div>Discount</div>
            <div>200</div>
          </div>
          <div className='flex justify-between'>
            <div>Amount to Pay</div>
            <div>200</div>
          </div>
        </div>
      </div>

      <div className='w-[100%] h-10 flex border-b-2 border-zinc '>
        <button className=' text-green-500 px-5 py-2'>Order/KOT</button>
        <button className=' text-green-500 px-5 py-2'>Print Bill</button>
        <button className=' text-green-500 px-5 py-2'>Payment</button>
      </div>
      <div></div>
    </div>
  );
};

export default OrderedItems;
