"use client"

import { useFormStatus } from "react-dom";
import { useRouter } from 'next/navigation';
import toast from "react-hot-toast";


export default function Button({type, range}){
    const {pending} = useFormStatus()
    const router = useRouter()

    function handleButton(){
        toast.success(`${type==="update" ? 'Cabin updated successfully' : 'Cabin created successfully'}`)

        setTimeout(()=>{
          router.push(`${type==="update" ? "/account/reservations" : "/cabins"}`)
        }, 3000)
    }

    return (
        <button onClick={handleButton} className="bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300">
            {type === "update" ? pending ? "Updating..." : "Update reservation" :pending ? "Reserving..." : "Reserve now"}
            
        </button>
    )
}