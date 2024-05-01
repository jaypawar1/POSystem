"use client"

import React, { useState } from "react";
import { IoAddOutline } from "react-icons/io5";
import "../app/globals.css";
import { Sidebar } from "@/components/sidebar";
import { FaSearch } from "react-icons/fa";
import { FaSync } from "react-icons/fa";
import { MdOutlineExplore } from "react-icons/md";
import { TbProgress } from "react-icons/tb";
import { MdOutlineDrafts } from "react-icons/md";
import { MdOutlineIncompleteCircle } from "react-icons/md";
import { MdOutlineCheckCircleOutline } from "react-icons/md";
import { BiErrorAlt } from "react-icons/bi";
import TemplateForm from "./partner/createTemplate";
import { IoMdCloseCircle } from "react-icons/io";
import Link from "next/link";
const Templates = () => {
  const [selectedTab, setSelectedTab] = useState(1);
  const [form,setForm] = useState(false)

  const formOpen = () => {
    return(
      setForm(!form)
    )
  }
  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="w-[80vw] bg-gray-100/50">
        <Link href="/qrgen">Create QR</Link>
        <header className="w-[80vw] h-[15vh]">
          <div className="flex w-[80vw] flex-row justify-between h-[12vh] items-center bg-white shadow-sm">
            <p className="text-2xl ml-6">Message Templates</p>
            <button onClick={formOpen} className="flex h-[50%] mr-5 items-center gap-1 bg-green-300 text-green-950 px-2 text-sm pr-3 rounded-md mx-2">
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
              className={`flex px-10 justify-center items-center py-2 gap-2 rounded ${
                selectedTab === 1
                  ? "bg-green-300 text-green-950"
                  : "bg-gray-100 text-gray-700"
              }`}
              onClick={() => setSelectedTab(1)}
            >
              <MdOutlineExplore className="text-2xl"/> Explore
            </button>
            <button
              className={`flex px-10 justify-center items-center py-2 gap-2 rounded ${
                selectedTab === 2
                  ? "bg-green-300 text-green-950"
                  : "bg-gray-100 text-gray-700"
              }`}
              onClick={() => setSelectedTab(2)}
            >
              <TbProgress className="text-2xl"/> All
            </button>
            <button
              className={`flex px-10 justify-center items-center py-2 gap-2 rounded ${
                selectedTab === 3
                  ? "bg-green-300 text-green-950"
                  : "bg-gray-100 text-gray-700"
              }`}
              onClick={() => setSelectedTab(3)}
            >
              < MdOutlineDrafts className="text-2xl"/> Drafts
            </button>
            <button
              className={`flex px-10 justify-center items-center py-2 gap-2 rounded ${
                selectedTab === 4
                  ? "bg-green-300 text-green-950"
                  : "bg-gray-100 text-gray-700"
              }`}
              onClick={() => setSelectedTab(4)}
            >
              <MdOutlineIncompleteCircle className="text-2xl"/>Pending
            </button>
            <button
              className={`flex px-10 justify-center items-center py-2 gap-2 rounded ${
                selectedTab === 5
                  ? "bg-green-300 text-green-950"
                  : "bg-gray-100 text-gray-700"
              }`}
              onClick={() => setSelectedTab(5)}
            >
              <MdOutlineCheckCircleOutline className="text-2xl"/>Approved
            </button>
            <button
              className={`flex px-10 justify-center items-center py-2 gap-2 rounded ${
                selectedTab === 6
                  ? "bg-green-300 text-green-950"
                  : "bg-gray-100 text-gray-700"
              }`}
              onClick={() => setSelectedTab(6)}
            >
              <BiErrorAlt className="text-2xl"/>Action Required
            </button>
          </div>
        </header>
      </div>
      {form && <div className="fixed top-0 left-0 h-screen w-screen backdrop-blur-sm flex justify-center items-center" ><button onClick={formOpen} className="fixed top-5 right-10"><IoMdCloseCircle className="text-3xl"/></button><TemplateForm/></div>}
    </div>
  );
};

export default Templates;
