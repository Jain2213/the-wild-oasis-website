import Button from "@/app/_components/Button";
import ReservationForm from "@/app/_components/ReservationForm";
import { editBooking } from "@/app/_lib/action";
import { getBooking, getCabin } from "@/app/_lib/data-service";
import { Toaster } from "react-hot-toast";

export default async function Page({ params }) {
  const { numGuests, observations, cabinId } = await getBooking(
    params.bookingId
  );
  const { maxCapacity } = await getCabin(cabinId);

  return (
    <div className="ml-10">
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{ margin: "18px" }}
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
          error: {
            duration: 3000,
            theme: {
              primary: "red",
              secondary: "black",
            },
          },
        }}
      />
      <h1 className="text-accent-500 mb-6 text-2xl font-bold">
        Edit Reservation #{params.bookingId}
      </h1>
      <form
        className="bg-primary-900 py-10 px-16 text-lg flex gap-5 flex-col"
        action={editBooking.bind(null, params.bookingId)}
      >
        <div className="space-y-2">
          <label htmlFor="numGuests">How many guests?</label>
          <select
            name="numGuests"
            id="numGuests"
            defaultValue={numGuests}
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            required
          >
            <option value="" key="">
              Select number of guests...
            </option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="observations">
            Anything we should know about your stay?
          </label>
          <textarea
            name="observations"
            id="observations"
            defaultValue={observations}
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            placeholder="Any pets, allergies, special requirements, etc.?"
          />
        </div>

        <div className=" ml-[40rem] w-[14rem]">
          <Button type="update" />
        </div>
      </form>
    </div>
  );
}
