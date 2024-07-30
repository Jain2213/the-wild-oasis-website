"use client"
import { useFormStatus } from "react-dom";

export default function Button({type, range}){
    const {pending} = useFormStatus()
    return (
        <button disabled={pending} className={`${range && (!range.from || !range.to) ? "invisible hidden" : ""}bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300`}>
            {type === "update" ? pending ? "Updating..." : "Update reservation" :pending ? "Reserving..." : "Reserve now"}
        </button>
    )
}