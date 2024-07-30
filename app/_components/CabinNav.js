"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useReservation } from "../_lib/useReservation";

export default function CabinNav(){
    const searchParams = useSearchParams()
    const router = useRouter()
    const pathName = usePathname()

    const {range, setRange} = useReservation()


    const cabinSearch = searchParams?.get("capacity")

    function handleCabinCapacity(cabinCapacity){

    const params = new URLSearchParams(searchParams)
      params.set("capacity", cabinCapacity)
      router.replace(pathName? `${pathName}?capacity=${cabinCapacity}`: pathName)

    }
    
    console.log(range)
    return (<div className="flex justify-between border-2 border-primary-800 h-10 mb-4 w-[32rem]">
        <button onClick={()=>handleCabinCapacity("all")} className={`w-32 px-1 text-primary-50 hover:bg-primary-700 ${cabinSearch==="all" || !cabinSearch ? "bg-primary-700" : ""}`}>All Cabins</button>
        <button onClick={()=>handleCabinCapacity("small")} className={`w-32 px-1 text-primary-50 hover:bg-primary-700 ${cabinSearch==="small"? "bg-primary-700" : ""}`}>Small Cabins</button>
        <button onClick={()=>handleCabinCapacity("medium")} className={`w-32 px-1 text-primary-50 hover:bg-primary-700 ${cabinSearch==="medium"? "bg-primary-700" : ""}`}>Medium Cabins</button>
        <button onClick={()=>handleCabinCapacity("large")} className={`w-32 px-1 text-primary-50 hover:bg-primary-700 ${cabinSearch==="large"? "bg-primary-700" : ""}`}>Large Cabins</button>
    </div>)
}