import CabinDetails from "@/app/_components/CabinDetails";
import LoginMessage from "@/app/_components/LoginMessage";
import DateSelector from "@/app/_components/DateSelector";
import ReservationForm from "@/app/_components/ReservationForm";
import { auth } from "@/app/_lib/auth";
import {
  getBookedDatesByCabinId,
  getCabin,
  getCabins,
  getSettings,
} from "@/app/_lib/data-service";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { Toaster } from "react-hot-toast";

export async function generateMetadata({ params }) {
  const { name = "000" } = await getCabin(params.cabinId);
  return {
    title: `cabin: ${name} /`,
  };
}

export default async function Page({ params }) {
  const cabin = await getCabin(params.cabinId);
  const bookedDates = await getBookedDatesByCabinId(params.cabinId);
  const { id, name, maxCapacity, regularPrice, discount, image, description } =
    cabin;

  const settings = await getSettings();
  const session = await auth();

  return (
    <div className="max-w-6xl mx-auto mt-8">
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
      <div className="grid grid-cols-[3fr_4fr] gap-20 border border-primary-800 py-3 px-10 mb-24">
        <div className="relative scale-[1.15] -translate-x-3">
          <Image
            src={image}
            fill
            className="object-cover"
            alt={`Cabin ${name}`}
          />
        </div>

        <div>
          <h3 className="text-accent-100 font-black text-7xl mb-5 translate-x-[-254px] bg-primary-950 p-6 pb-1 w-[150%]">
            Cabin {name}
          </h3>

          <CabinDetails description={description} />

          <ul className="flex flex-col gap-4 mb-7">
            <li className="flex gap-3 items-center">
              <UsersIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                For up to <span className="font-bold">{maxCapacity}</span>{" "}
                guests
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <MapPinIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                Located in the heart of the{" "}
                <span className="font-bold">Dolomites</span> (Italy)
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <EyeSlashIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                Privacy <span className="font-bold">100%</span> guaranteed
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-5xl font-semibold text-center mb-10">
          Reserve today. Pay on arrival.
        </h2>
      </div>

      <div className="flex mb-14">
        <DateSelector
          bookedDates={bookedDates}
          settings={settings}
          cabin={cabin}
        />
        {session?.user ? (
          <ReservationForm
            cabin={cabin}
            session={session}
            maxCapacity={maxCapacity}
          />
        ) : (
          <LoginMessage />
        )}
      </div>
    </div>
  );
}
