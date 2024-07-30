"use client"

import Link from "next/link"
import { useState } from "react"

export default function CabinDetails({description}){

    const [textExpander, setTextExpander] = useState(false)
    return (
        <div >
            <p className="text-lg text-primary-300 mb-10">{textExpander ? description + " "  : description.slice(0,265)+"... "}{textExpander ? <button onClick={()=> setTextExpander(false)} className="text-primary-700 border-b-2 border-primary-700"> Show less</button> : <button onClick={()=> setTextExpander(true)} className="text-primary-700 border-b-2 border-primary-700">Show more</button>}</p>
        </div>
        
    )}