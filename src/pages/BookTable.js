import NavBar from "@/components/navbar"
import { BsArrowRepeat } from "react-icons/bs";
import { IoAdd } from "react-icons/io5";

 const bookTable = () => {
    return(
        <div className="w-screen min-h-screen">
            <NavBar/>
            <div className="w-screen flex justify-between items-center border-b-2 i h-[7vh]">
                <p className="font-semibold ml-3">Table View</p>
                <div className="flex gap-3 py-2 items-center px-2">
                    <BsArrowRepeat className="text-3xl"/>
                    <button className="p-1 px-2 bg-[#8a6240] text-white rounded">Delivery</button>
                    <button className="p-1 px-2 bg-[#8a6240] text-white rounded">Pick Up</button>
                    <button className="p-1 px-2 bg-[#8a6240] text-white flex items-center rounded"><span className="text-xl"><IoAdd/></span> Add Table</button>
                </div>
            </div>
            <div className="w-screen flex justify-between items-center h-[9vh]">
                <div className="flex gap-3">
                <button className="p-1 px-2 bg-[#8a6240] text-white rounded flex items-center ml-3"><span className="text-xl"><IoAdd/></span>Table Reservation</button>
                    <button className="p-1 px-2 bg-[#8a6240] text-white rounded flex items-center"><span className="text-xl"><IoAdd/></span>Contactless</button>
                </div>
                <div className="flex gap-3 py-2 items-center px-2">
                   <ul className="flex gap-3">
                    <li className="bg-gray-300 p-1 rounded border-gray-400 border flex items-center gap-2 font-bold"><div className="rounded-full bg-white h-4 w-4"></div> Move KOT/Items</li>
                    <li className="flex items-center gap-2">
                    <div className="rounded-full bg-gray-300 h-4 w-4"></div>
                    Blank Table 
                    </li>
                    <li className="flex items-center gap-2">
                    <div className="rounded-full bg-sky-500 h-4 w-4"></div>
                    Running Table 
                    </li>
                    <li className="flex items-center gap-2">
                    <div className="rounded-full bg-green-500 h-4 w-4"></div>
                    Printed Table 
                    </li>
                    <li className="flex items-center gap-2">
                    <div className="rounded-full bg-orange-300 h-4 w-4"></div>
                    Paid Table 
                    </li>
                    <li className="flex items-center gap-2">
                    <div className="rounded-full bg-amber-400 h-4 w-4"></div>
                    Running KOT Table 
                    </li>
                   </ul>
                    
                </div>
            </div>
            <div className="w-screen min-h-[65vh]">
                <h1 className="mx-3 my-3 font-bold text-xl text-[#8a6240]">Ground Floor</h1>
                <div className="w-screen h-[15vh] flex">
                <div className="h-[15vh] w-[15vh] rounded-xl border-2 border-gray-500 border-dashed flex justify-center items-center bg-zinc-300 mx-2">1</div>
                <div className="h-[15vh] w-[15vh] rounded-xl border-2 border-gray-500 border-dashed flex justify-center items-center bg-zinc-300 mx-2">2</div>
                <div className="h-[15vh] w-[15vh] rounded-xl border-2 border-gray-500 border-dashed flex justify-center items-center bg-zinc-300 mx-2">3</div>
                <div className="h-[15vh] w-[15vh] rounded-xl border-2 border-gray-500 border-dashed flex justify-center items-center bg-zinc-300 mx-2">4</div>
                <div className="h-[15vh] w-[15vh] rounded-xl border-2 border-gray-500 border-dashed flex justify-center items-center bg-zinc-300 mx-2">5</div>
                <div className="h-[15vh] w-[15vh] rounded-xl border-2 border-gray-500 border-dashed flex justify-center items-center bg-zinc-300 mx-2">6</div>
                <div className="h-[15vh] w-[15vh] rounded-xl border-2 border-gray-500 border-dashed flex justify-center items-center bg-zinc-300 mx-2">7</div>
                <div className="h-[15vh] w-[15vh] rounded-xl border-2 border-gray-500 border-dashed flex justify-center items-center bg-zinc-300 mx-2">8</div>
                </div>
                <h1 className="mx-3 my-3 font-bold text-xl text-[#8a6240]">Basement</h1>
                <div className="w-screen h-[15vh] flex">
                <div className="h-[15vh] w-[15vh] rounded-xl border-2 border-gray-500 border-dashed flex justify-center items-center bg-zinc-300 mx-2">9</div>
                <div className="h-[15vh] w-[15vh] rounded-xl border-2 border-gray-500 border-dashed flex justify-center items-center bg-zinc-300 mx-2">10</div>
                <div className="h-[15vh] w-[15vh] rounded-xl border-2 border-gray-500 border-dashed flex justify-center items-center bg-zinc-300 mx-2">11</div>
                <div className="h-[15vh] w-[15vh] rounded-xl border-2 border-gray-500 border-dashed flex justify-center items-center bg-zinc-300 mx-2">12</div>
                <div className="h-[15vh] w-[15vh] rounded-xl border-2 border-gray-500 border-dashed flex justify-center items-center bg-zinc-300 mx-2">13</div>
                <div className="h-[15vh] w-[15vh] rounded-xl border-2 border-gray-500 border-dashed flex justify-center items-center bg-zinc-300 mx-2">14</div>
                <div className="h-[15vh] w-[15vh] rounded-xl border-2 border-gray-500 border-dashed flex justify-center items-center bg-zinc-300 mx-2">15</div>
                <div className="h-[15vh] w-[15vh] rounded-xl border-2 border-gray-500 border-dashed flex justify-center items-center bg-zinc-300 mx-2">16</div>
                <div className="h-[15vh] w-[15vh] rounded-xl border-2 border-gray-500 border-dashed flex justify-center items-center bg-zinc-300 mx-2">17</div>
                <div className="h-[15vh] w-[15vh] rounded-xl border-2 border-gray-500 border-dashed flex justify-center items-center bg-zinc-300 mx-2">18</div>
                </div>
                <h1 className="mx-3 my-3 font-bold text-xl text-[#8a6240]">Hall</h1>
                <div className="w-screen h-[15vh] flex">
                <div className="h-[15vh] w-[15vh] rounded-xl border-2 border-gray-500 border-dashed flex justify-center items-center bg-zinc-300 mx-2">Hall 1</div>
                <div className="h-[15vh] w-[15vh] rounded-xl border-2 border-gray-500 border-dashed flex justify-center items-center bg-zinc-300 mx-2">Hall 2</div>
                <div className="h-[15vh] w-[15vh] rounded-xl border-2 border-gray-500 border-dashed flex justify-center items-center bg-zinc-300 mx-2">Hall 3</div>
                </div>
            </div>
        </div>
    )
}
export default bookTable