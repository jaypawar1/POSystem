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
        <div className="flex flex-col md:flex-row text-sm">
            <Sidebar/>
            <div className="flex flex-col w-full">
                <header className="h-[11vh] w-full flex justify-between items-center bg-gray-200">
                    <p className="text-xl ml-6">Contacts</p> 
                </header>
                <div className="p-6 h-full w-full"> 
                    <div className='h-[10vh] w-[100%] flex items-center'>
                        <div className='flex w-[100%]'>
                           
                        <div className="group">
  <svg className="icon mx-5" aria-hidden="true" viewBox="0 0 24 24">
    <g>
      <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z" />
    </g>
  </svg>
  <input placeholder="Search" type="search" className="input" />
</div>


                            <button className='flex items-center gap-1 mx-3 text-lg'><IoFilter/>Filter</button>
                        </div>
                        <div className='flex w-[60%] gap-2 mr-5'>
                            <button className='inline-flex items-center gap-2 rounded border border-gray-100 bg-gray-100 px-8 py-2  text-black hover:bg-transparent hover:text-gray-100 hover:bg-[#009945] focus:outline-none focus:ring active:text-gray-100'>Broadcast</button>
                            <button className='inline-flex items-center gap-2 text-nowrap rounded border border-gray-100 bg-gray-100 px-8 py-2 text-black hover:bg-transparent hover:text-gray-100 hover:bg-[#009945] focus:outline-none focus:ring active:text-gray-100'><IoAdd className='text-xl'/> Add Contact</button>
                            <button className='inline-flex items-center gap-2 text-nowrap rounded border border-gray-100 bg-gray-100 px-8 py-2 text-black hover:bg-transparent hover:text-gray-100 hover:bg-[#009945] focus:outline-none focus:ring active:text-gray-100'>Import <BiArrowToBottom/></button>
                            <button className='inline-flex items-center gap-2 text-nowrap rounded border border-gray-100 bg-gray-100 px-8 py-2 text-black hover:bg-transparent hover:text-gray-100 hover:bg-[#009945] focus:outline-none focus:ring active:text-gray-100'>Actions <BiArrowToBottom/></button>
                        </div>
                    </div> 
                    <div className='flex w-full h-[70vh] justify-center items-center'>
                    <div className='table w-[96.5%] h-[70vh] bg-gray-100 rounded overflow-x-auto'>
                        <table className="w-full">
                        <thead>
    <tr> 
        <th className="py-2"><input type="checkbox" /></th>
        <th className="py-2">Mobile Number</th>
        <th className="py-2">Tags</th>
        <th className="py-2">Source</th>
        <th className="py-2">Status</th>
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
