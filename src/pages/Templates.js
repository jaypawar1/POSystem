"use client"

import React, { useState } from "react";
import { IoAddOutline } from "react-icons/io5";
import "../app/globals.css";
import { Sidebar } from "@/components/sidebar";
import { FaSearch } from "react-icons/fa";
import { FaSync } from "react-icons/fa";

const Templates = () => {
  const [selectedTab, setSelectedTab] = useState(1);

  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="w-[80vw] bg-gray-100/50">
        <header className="w-[80vw] h-[15vh]">
          <div className="flex w-[80vw] flex-row justify-between h-[12vh] items-center bg-white shadow-sm">
            <p className="text-2xl ml-6">Message Templates</p>
            <button className="flex h-[50%] mr-5 items-center gap-1 bg-green-300 text-green-950 px-2 text-sm pr-3 rounded-md mx-2">
              <IoAddOutline className="text-xl" />
              New
            </button>
          </div>
          <div className="h-[12vh] flex justify-between items-center">
            <div className="flex rounded h-[50%] w-fit  m-2 shadow-md justify-between items-center ml-6 bg-white">
              <input
                placeholder="Find Templates"
                className="bg-transparent px-3 h-[90%] focus:outline-none"
                type="text"
              />
              <button className="h-7 w-7 flex justify-center items-center rounded-full bg-green-300 text-green-950 mx-2">
                <FaSearch />
              </button>
            </div>
            <button className="flex items-center gap-2 bg-green-300 text-green-950 px-4 mr-5 text-sm rounded-md mx-2 h-[50%]">
              <FaSync />
              Sync Status
            </button>
          </div>
          <div className="flex mx-4 justify-between px-2 py-1 rounded-t-md">
            <button
              className={`flex-1 text-center py-2 rounded ${
                selectedTab === 1
                  ? "bg-green-300 text-green-950"
                  : "bg-gray-100/50 text-gray-700"
              }`}
              onClick={() => setSelectedTab(1)}
            >
              Tab 1
            </button>
            <button
              className={`flex-1 text-center py-2 rounded ${
                selectedTab === 2
                  ? "bg-green-300 text-green-950"
                  : "bg-gray-100/50 text-gray-700"
              }`}
              onClick={() => setSelectedTab(2)}
            >
              Tab 2
            </button>
            <button
              className={`flex-1 text-center py-2 rounded ${
                selectedTab === 3
                  ? "bg-green-300 text-green-950"
                  : "bg-gray-100/50 text-gray-700"
              }`}
              onClick={() => setSelectedTab(3)}
            >
              Tab 3
            </button>
            <button
              className={`flex-1 text-center py-2 rounded ${
                selectedTab === 4
                  ? "bg-green-300 text-green-950"
                  : "bg-gray-100/50 text-gray-700"
              }`}
              onClick={() => setSelectedTab(4)}
            >
              Tab 4
            </button>
            <button
              className={`flex-1 text-center py-2 rounded ${
                selectedTab === 5
                  ? "bg-green-300 text-green-950"
                  : "bg-gray-100/50 text-gray-700"
              }`}
              onClick={() => setSelectedTab(5)}
            >
              Tab 5
            </button>
            <button
              className={`flex-1 text-center py-2 rounded ${
                selectedTab === 6
                  ? "bg-green-300 text-green-950"
                  : "bg-gray-100/50 text-gray-700"
              }`}
              onClick={() => setSelectedTab(6)}
            >
              Tab 6
            </button>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Templates;
