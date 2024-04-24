
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
