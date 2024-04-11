import { Sidebar } from "@/components/sidebar";
import { FaSearch } from "react-icons/fa";
import { MdLockOpen } from "react-icons/md";
import { IoIosInformationCircle } from "react-icons/io";

export default function Business(){
    return(
        <div className="h-screen bg-gray-100 w-screen flex">
            <Sidebar/>
           <div className="h-screen w-[80vw]">
            <header className="flex justify-between items-center h-[12vh] bg-white">
                <div>
                    <p className="mx-7 text-xl">Business : PixelMize</p>
                </div>
                <div className="flex gap-2 items-center">
                <button className="flex items-center gap-1 bg-green-300 text-green-950 px-4 py-2 text-sm rounded-md "><MdLockOpen className="text-lg"/>Reset Password</button>
                    <div className="flex rounded-3xl w-fit  m-2 shadow-md justify-between items-center mr-6 py-1.5 bg-gray-100/60">
              <input
                placeholder="Find Business"
                className="bg-transparent px-3 py-1.5 h-[90%] focus:outline-none"
                type="text"
              />
              <button className="h-7 w-7 flex justify-center items-center rounded-full bg-green-300 text-green-950 mx-2">
                <FaSearch />
              </button>
            </div>
                </div>
            </header>

            <div className="mt-6">
               <div className="w-full flex justify-center ">
               <div className="bg-white flex flex-col justify-center w-[96%] px-2 pb-2.5 rounded">
                    <h1 className="text-2xl mt-3 mx-6">Business Details:</h1>
                    <div className="flex justify-center items-center w-full p-4">
                    <div className="flex bg-green-200 text-green-950 py-4 rounded justify-around w-[100%]">
                        <div>
                            <p className="text-sm flex items-center gap-1">Company Name <IoIosInformationCircle/></p>
                            <p className="text-base text-black font-bold">PixelMize</p>
                        </div>
                        <div>
                            <p className="text-sm flex items-center gap-1">Mobile Number <IoIosInformationCircle/></p>
                            <p className="text-base text-black font-bold">9774773955</p>
                        </div>
                        <div>
                            <p className="text-sm flex items-center gap-1">Admin Email <IoIosInformationCircle/> </p>
                            <p className="text-base font-bold">Jaypawar@pixelmize.com</p>
                        </div>
                    </div>
                    </div>
                </div>
               </div>
               <div className="w-full">
                <p>Live Projects</p>
                <div>
                    
                </div>
               </div>
            </div>
           </div>
        </div>
    )
}