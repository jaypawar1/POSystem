"use client"

import React from 'react'
import "../app/globals.css"
function NavBar() {
  return (
    <div className=' w-[100%] h-[8vh] bg-neutral-800 grid grid-cols-3 items-center px-3'>
      <span className=" text-green-600  font-bold text-2xl">Resto<span className=' text-white'>AI</span></span>
      <div className="flex text-white justify-between">
        <div>POS</div>
        <div>Setting</div>
        <div>Statistic</div>
        <div>Order Status</div>
      </div>
    </div>
  )
}

export default NavBar
