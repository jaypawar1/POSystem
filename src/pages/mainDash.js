<<<<<<< HEAD
=======

import { CircularProgress } from "@mui/material";
>>>>>>> 4b737faca3dfb9e8ddfb40c89fe69d71d016bba7

import { Sidebar } from "@/components/sidebar";
import "../app/globals.css";
import { IoIosArrowDown } from "react-icons/io";
import Linechart from "@/components/lineChart";

const Dashboard = () => {
    return (
        <div className="min-h-screen w-full flex">
            <Sidebar />
           <div className="h-screen bg-gray-100 w-full">
           <header className="w-full min-h-[10vh] shadow  text-black mb-10 flex gap-4 font-semibold items-center justify-end">
                    <p>Current Credits: 30400</p>
                    <p>Account Health: <span className="text-green-700 font-semibold">100%</span></p>
                    <img src="https://i.pinimg.com/564x/0f/43/b2/0f43b2d9aa3d21c6597b3302c7719b49.jpg" className="w-10 h-10 rounded-full mx-3" alt="" />
                </header>
<<<<<<< HEAD
            <div className="w-full  flex justify-center gap-3">
                <div className="w-[95%]  flex justify-around gap-3">
            <article className="rounded-lg border border-gray-150 bg-white p-6 w-full flex">
                <div className="w-[50%]">
  <div className="w-[100%]">
    <p className="text-sm text-gray-500">Visits</p>

    <p className="text-2xl font-medium text-gray-900">1551</p>
  </div>

  <div className="mt-1 flex gap-1 text-green-600">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
      />
    </svg>

    <p className="flex gap-2 text-xs">
      <span className="font-medium"> 67.81% </span>

      <span className="text-gray-500"> Since last week </span>
    </p>
  </div>
  </div>
  <div className="w-[50%]"><Linechart/></div>
</article>

<article className="rounded-lg border border-gray-100 bg-white p-6 w-full flex justify-around">
                <div className="w-[56%]">
  <div className="w-[100%]">
    <p className="text-sm text-gray-500">Total Sales</p>

    <p className="text-2xl font-medium text-gray-900">₹32040</p>
  </div>

  <div className="mt-1 flex gap-1 text-green-600">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
      />
    </svg>

    <p className="flex gap-2 text-xs">
      <span className="font-medium"> 67.81% </span>

      <span className="text-gray-500"> Since last week </span>
    </p>
  </div>
  </div>
  <div className="w-[50%]"><Linechart/></div>
</article>
<article className="rounded-lg border border-gray-100 h-[20vh] bg-white p-6 w-full flex">
                <div className="w-[50%]">
  <div className="w-[100%]">
    <p className="text-sm text-gray-500">Profit</p>

    <p className="text-2xl font-medium text-gray-900">$240.94</p>
  </div>

  <div className="mt-1 flex gap-1 text-green-600">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
      />
    </svg>

    <p className="flex gap-2 text-xs">
      <span className="font-medium"> 67.81% </span>

      <span className="text-gray-500"> Since last week </span>
    </p>
  </div>
  </div>
  <div className="w-[45%]"><Linechart/></div>
</article>
</div>

=======
                <div className="flex mt-5">
                    <div className="min-h-[55vh] max-h-fit w-[38vw] mx-2 bg-white rounded flex flex-col shadow-lg">
                        <p className="flex items-center text-2xl font-semibold my-4 ml-7 mb-1 mx-6">Highlights for Today <IoIosArrowDown /></p>
                        <div className="w-full grid grid-cols-2 ml-7 my-3 justify-around gap-3">
                            <div>
                                <p>Total Sales:</p>
                                <p className="text-5xl font-bold ">2343</p>
                            </div>
                            <div>
                                <p>Total Orders:</p>
                                <p className="text-5xl font-bold">42</p>
                            </div>
                            <div>
                                <p>Total Customers:</p>
                                <p className="text-5xl font-bold">45</p>
                            </div>
                            <div>
                                <p>Reward Redeemed</p>
                                <p className="text-5xl font-bold">29</p>
                            </div>
                        </div>
                        <div className="w-full ml-7">
                            <div className="w-[50%] bg-gray-700 h-1.5 rounded-md m-3 mt-1.5 mb-0">
                                <div className="w-[65%] bg-green-700 h-1.5 rounded-md"></div>
                            </div>
                            <div className="w-[50%] m-3 mb-1.5 mt-0 flex justify-between">
                                <p>25</p> <p>20</p>
                            </div>
                        </div>
                        <div className="mx-3 flex items-center gap-2 mb-2 ml-7">
                            <div className="w-3 h-3 bg-green-700 rounded-full"></div><p>New Customers</p>
                            <div className="w-3 h-3 bg-gray-700 rounded-full"></div><p>Repeat Customers</p>
                        </div>
                    </div>
                    <div className="min-h-[50vh] max-h-fit mx-2 w-[38vw] bg-white flex flex-col rounded shadow-lg">
                        <p className="flex items-center text-2xl font-semibold my-2 mx-4">Highlights for Today <IoIosArrowDown /></p>
                        <div className="w-full grid grid-cols-2 m-3 justify-around">
                            <div className="mb-2">
                                <p>Total Sales:</p>
                                <p className="text-5xl font-bold">2343</p>
                            </div>
                            <div>
                                <p>Total Orders:</p>
                                <p className="text-5xl font-bold">42</p>
                            </div>
                            <div>
                                <p>Total Customers:</p>
                                <p className="text-5xl font-bold">45</p>
                            </div>
                            <div>
                                <p>Reward Redeemed</p>
                                <p className="text-5xl font-bold">29</p>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="w-[50%] bg-gray-700 h-1.5 rounded-md m-3 mt-1.5 mb-0">
                                <div className="w-[65%] bg-green-700 h-1.5 rounded-md"></div>
                            </div>
                            <div className="w-[50%] m-3 mb-1.5 mt-0 flex justify-between">
                                <p>25</p> <p>20</p>
                            </div>
                        </div>
                        <div className="mx-3 flex items-center gap-2 mb-2">
                            <div className="w-3 h-3 bg-green-700 rounded-full"></div><p>New Customers</p>
                            <div className="w-3 h-3 bg-gray-700 rounded-full"></div><p>Repeat Customers</p>
                        </div>
                    </div>
                </div>
                <div className="flex mt-5 mb-4">
                    <div className="min-h-[50vh] max-h-fit w-[38vw] mx-2 bg-white rounded shadow-lg flex flex-col">
                        <p className="font-semibold m-3 text-3xl">Visits In<span className="text-gray-500 mx-2 text-lg">Last 30 days</span></p>
                        <p className="text-5xl mx-3 font-bold">1551</p>
                        <div className="flex w-full my-3">
                            <div className="mx-3">
                                <p className="font-semibold text-gray-500 text-lg">Valid Numbers</p>
                                <p className="text-xl  font-bold">1551</p>
                            </div>
                            <div className="mx-2">
                                <p className="font-semibold text-gray-500 text-lg">Blocked Numbers</p>
                                <p className="text-xl font-bold">0</p>
                            </div>
                        </div>
                        <div className="w-[30vw] h-full flex items-center">
                        
                        </div>
                    </div>
                    <div className="min-h-[50vh] max-h-fit mx-2 w-[38vw] bg-white flex flex-col rounded shadow-lg">
                        <p className="m-3 mb-0 text-xl font-semibold text-gray-900">Total Customers with purchase</p>
                        <p className="m-3 text-5xl font-bold black">9404</p>
                        <div className="w-full flex justify-between">
                            <div className="flex">
                                <div className="flex mx-2 flex-col">
                                    <p className="text-gray-900 font-semibold text-lg">Active</p>
                                    <p className="text-2xl font-bold">6404</p>
                                </div>
                                <div className="flex mx-2 flex-col">
                                    <p className="text-gray-900 font-semibold text-lg">Inactive</p>
                                    <p className="text-2xl font-bold">2070</p>
                                </div>
                            </div>
                            <div className="w-[50%] h-full">
                                <Stack spacing={5} direction="row">
                                    <CircularProgress style={{ color: "rgb(0, 153, 69)" }} size="10rem" variant="determinate" value={65} />
                                </Stack>
                            </div>
                        </div>
                    </div>
                </div>
>>>>>>> 4b737faca3dfb9e8ddfb40c89fe69d71d016bba7
            </div>
            <div className="w-full h-[60vh]  flex justify-center items-center">
    <div className="flex flex-col bg-white w-[95%] border h-[90%] rounded">
        <p className="text-xl m-3 font-medium border border-t-0 border-l-0 border-r-0 pb-3 border-b-2">Today's Highlights</p>
       <div  className="w-full h-full flex">
        <div className=" h-full w-1/2">
        <article className="flex flex-col gap-1 rounded-lg bg-white p-3">
  <div className="inline-flex gap-2 self-end rounded bg-green-100 p-1 text-green-600">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
      />
    </svg>

    <span className="text-xs font-medium"> 67.81% </span>
  </div>

  <div>
    <strong className="block text-sm font-medium text-gray-500"> Profit </strong>

    <p>
      <span className="text-2xl font-medium text-gray-900"> $404.32 </span>

      <span className="text-xs text-gray-500"> from $240.94 </span>
    </p>
  </div>
</article>
        </div>
        <div className=" h-full w-1/2"></div>
       </div>
    </div>
</div>
           </div>
        </div>
    );
}

export default Dashboard;
