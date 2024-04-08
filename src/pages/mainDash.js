import Linechart from "@/components/lineChart";
import { CircularProgress } from "@mui/material"
import Stack from '@mui/material/Stack';
import { Sidebar } from "@/components/sidebar";
import "../app/globals.css"
const Dashboard = () =>{
    return(
        <div className="h-screen w-full text-[#f4e8d8] flex justify-center items-center">
            <Sidebar/>
       <div className="h-[95vh] w-[80vw] flex justify-start items-end">
       <div className="flex">
       <div className="h-[40vh] w-[30vw] mx-2 bg-zinc-900 rounded flex flex-col">
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
                <Linechart/>
            </div>
        </div>
        <div className="h-[40vh] mx-2 w-[30vw] bg-zinc-900 flex flex-col rounded">
        <p className="m-3 mb-0 text-xl font-semibold text-gray-500">Total Customers with purchase</p>
        <p className="m-3 text-5xl font-bold black">9404</p>
        <div className="w-full flex justify-between">
    <div className="flex">
        <div className="flex mx-2 flex-col">
            <p className="text-gray-500 font-semibold text-lg">Active</p>
            <p className="text-2xl font-bold">6404</p>
        </div>
        <div className="flex mx-2 flex-col">
            <p className="text-gray-500 font-semibold text-lg">Inactive</p>
            <p className="text-2xl font-bold">2070</p>
        </div>
        </div>
        <div className="w-[50%] h-full">
        <Stack  spacing={5} direction="row">

      <CircularProgress style={{color:"rgb(0, 153, 69)"}} size="10rem" variant="determinate" value={65} />
    </Stack>
        </div>
    
</div>
</div>

       </div>
       </div>
        </div>
    )
}

export default Dashboard