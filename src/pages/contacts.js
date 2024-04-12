import React from 'react'; 
import { Sidebar } from "@/components/sidebar";
import { BiArrowToBottom, BiSearch } from 'react-icons/bi';
import { IoAdd, IoFilter } from "react-icons/io5";

const Contacts = () => {
    const contacts = [
        { mobileNumber: "1234567890", tags: "Tag 1, Tag 2", source: "Source", status: "Active" },
        { mobileNumber: "9876543210", tags: "Tag 3, Tag 4", source: "Another Source", status: "Inactive" },
        { mobileNumber: "5555555555", tags: "Tag 5", source: "Yet Another Source", status: "Active" }
    ];

    return(
        <div className="flex flex-col md:flex-row">
            <Sidebar/>
            <div className="flex flex-col w-full">
                <header className="h-[8vh] w-full flex justify-between items-center bg-gray-200">
                    <p className="text-xl ml-6">Contacts</p> 
                </header>
                <div className="p-6 h-full w-full"> 
                    <div className='h-[10vh] w-[75vw] flex items-center'>
                        <div className='flex w-[100%]'>
                            <div className="flex ml-5 h-[5vh] bg-gray-100 rounded-md rounded-e-3xl border w-[50%]">
                                <input
                                    placeholder="Search Name or mobile number"
                                    type="text"
                                    className="bg-transparent focus:outline-none w-full"
                                />
                                <button className="rounded-full bg-green-200 p-2">
                                    <BiSearch className="text-lg" />
                                </button>
                            </div>
                            <button className='flex items-center gap-1 text-lg'><IoFilter/>Filter</button>
                        </div>
                        <div className='flex w-[60%] gap-2'>
                            <button className='flex items-center px-4 py-1 text-sm font-semibold rounded dark:bg-gray-100 dark:text-gray-800'>BROADCAST</button>
                            <button className='flex items-center px-4 py-1 text-sm font-semibold rounded dark:bg-gray-100 dark:text-gray-800 '><IoAdd/> Add Contact</button>
                            <button className='flex items-center px-4 py-1 text-sm font-semibold rounded dark:bg-gray-100 dark:text-gray-800'>Import <BiArrowToBottom/></button>
                            <button className='flex items-center px-4 py-1 text-sm font-semibold rounded dark:bg-gray-100 dark:text-gray-800'>Actions <BiArrowToBottom/></button>
                        </div>
                    </div> 
                    <div className='flex w-full h-[70vh] justify-center items-center'>
                    <div className='table w-[90%] h-[60vh] bg-gray-100 rounded overflow-x-auto'>
                        <table className="w-full">
                            <thead>
                                <tr>
                                    <th className=" py-2"><input type="checkbox" /></th>
                                    <th className="px-4 py-2">Mobile Number</th>
                                    <th className="px-4 py-2">Tags</th>
                                    <th className="px-4 py-2">Source</th>
                                    <th className="px-4 py-2">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {contacts.map((contact, index) => (
                                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-200' : 'bg-white'}>
                                        <td className="px-4 py-2"><input type="checkbox" /></td>
                                        <td className="px-4 py-2">{contact.mobileNumber}</td>
                                        <td className="px-4 py-2">{contact.tags}</td>
                                        <td className="px-4 py-2">{contact.source}</td>
                                        <td className="px-4 py-2">{contact.status}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div> 
                        </div>             
                </div>
            </div>
        </div>
    );
}

export default Contacts;
