"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { IoAddOutline, IoMdCloseCircle } from "react-icons/io5";
import { FaSearch, FaSync } from "react-icons/fa";
import {
  MdOutlineExplore,
  MdOutlineDrafts,
  MdOutlineIncompleteCircle,
  MdOutlineCheckCircleOutline,
} from "react-icons/md";
import { TbProgress } from "react-icons/tb";
import { BiErrorAlt } from "react-icons/bi";
import TemplateForm from "./partner/createTemplate";

const Templates = () => {
  const [selectedTab, setSelectedTab] = useState(1);
  const [form, setForm] = useState(false);
  const [tokens, setTokens] = useState([]);

  const formOpen = () => setForm(!form);

  useEffect(() => {
    const fetchTokens = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user"));
        const response = await axios.get(
          "https://backend.aisensy.com/direct-apis/t1/get-templates",
          {
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${user?.data?.user?.busnessToken}`,
            },
          },
        );
        setTokens(response.data.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchTokens();
  }, []);

  return (
    <div className="flex flex-row">
      <div className="w-[80vw] bg-gray-100/50">
        <header className="w-[80vw] h-[15vh]">
          <div className="flex w-[80vw] flex-row justify-between h-[12vh] items-center bg-white shadow-sm">
            <p className="text-2xl ml-6">Message Templates</p>
            <button
              onClick={formOpen}
              className="flex h-[50%] mr-5 items-center gap-1 bg-green-300 text-green-950 px-2 text-sm pr-3 rounded-md mx-2"
            >
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
            {renderTabs()}
          </div>
          {tokens.map((token) => (
            <div
              key={token.id}
              className="max-w-sm rounded overflow-hidden shadow-lg m-4"
            >
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{token.name}</div>
                <p className="text-gray-700 text-base">
                  Language: {token.language}
                </p>
                <p className="text-gray-700 text-base">
                  Status: {token.status}
                </p>
                <p className="text-gray-700 text-base">
                  Category: {token.category}
                </p>
              </div>
            </div>
          ))}
        </header>
      </div>
      {form && (
        <div className="fixed top-0 left-0 h-screen w-screen backdrop-blur-sm flex justify-center items-center">
          <button onClick={formOpen} className="fixed top-5 right-10">
            <IoMdCloseCircle className="text-3xl" />
          </button>
          <TemplateForm />
        </div>
      )}
    </div>
  );

  function renderTabs() {
    const tabs = [
      {
        id: 1,
        icon: <MdOutlineExplore className="text-2xl" />,
        text: "Explore",
      },
      { id: 2, icon: <TbProgress className="text-2xl" />, text: "All" },
      { id: 3, icon: <MdOutlineDrafts className="text-2xl" />, text: "Drafts" },
      {
        id: 4,
        icon: <MdOutlineIncompleteCircle className="text-2xl" />,
        text: "Pending",
      },
      {
        id: 5,
        icon: <MdOutlineCheckCircleOutline className="text-2xl" />,
        text: "Approved",
      },
      {
        id: 6,
        icon: <BiErrorAlt className="text-2xl" />,
        text: "Action Required",
      },
    ];

    return tabs.map((tab) => (
      <button
        key={tab.id}
        className={`flex px-10 justify-center items-center py-2 gap-2 rounded ${
          selectedTab === tab.id
            ? "bg-green-300 text-green-950"
            : "bg-gray-100 text-gray-700"
        }`}
        onClick={() => setSelectedTab(tab.id)}
      >
        {tab.icon}
        {tab.text}
      </button>
    ));
  }
};

export default Templates;
