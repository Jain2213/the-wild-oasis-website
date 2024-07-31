"use client"
import { TrashIcon } from '@heroicons/react/24/solid';
import { removeBooking } from '../_lib/action';
import toast from 'react-hot-toast';

function DeleteReservation({ bookingId }) {
  return (
    <form action={removeBooking.bind(null,bookingId)}>
    <button onClick={()=> toast.success("Cabin deleted successfully")} className='group flex items-center h-16 gap-2 uppercase text-xs font-bold text-primary-300 flex-grow px-3 hover:bg-accent-600 transition-colors hover:text-primary-900'>
      <TrashIcon className='h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors' />
      <span className='mt-1'>Delete</span>
    </button>
    </form>
  );
}

export default DeleteReservation;
