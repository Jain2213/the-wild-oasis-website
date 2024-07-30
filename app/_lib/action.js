"use server"
import { revalidatePath } from "next/cache";
import { signIn, signOut } from "./auth";
import { createBooking, deleteBooking, updateBooking, updateGuest } from "./data-service";


export async function signInAction(){
    await signIn('google', {redirectTo: "/account"})
}

export async function signOutAction(){
    await signOut({redirectTo: "/"})
}

export async function updateGuestAction(id, formData){
    const [nationality, countryFlag] = formData.get("nationality").split("%")
    const nationalID = formData.get("nationalID")

    await updateGuest(id, {nationality,countryFlag,nationalID, country: nationality})
    revalidatePath("/account")
}


export async function generateBookings(bookingsData, formData){
    const numGuests = formData.get("numGuests")
    const observations = formData.get("observations")
    await createBooking({...bookingsData, numGuests, observations})

}

export async function editBooking(id,formData){
    const numGuests = formData.get("numGuests")
    const observations = formData.get("observations")
    await updateBooking(id,{numGuests, observations})
}

export async function removeBooking(id){
    await deleteBooking(id)
    revalidatePath("/account/reservations")
}