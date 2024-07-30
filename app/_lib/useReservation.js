"use client"
import { createContext, useContext, useState } from "react"

const ReservationContext = createContext()
const initialState = {to: undefined, from: undefined}

export default function ReservationProvider({children}){
    
    const [range, setRange] = useState(initialState)
    const resetRange = ()=> setRange(initialState)

    return <ReservationContext.Provider value={{range, setRange, resetRange}}>
        {children}
    </ReservationContext.Provider>
}

export function useReservation(){
    const context = useContext(ReservationContext)
    if(context === undefined) return new Error("Context is not defined")
    return context
}