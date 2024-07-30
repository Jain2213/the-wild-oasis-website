import { Suspense } from "react";
import CabinList from "../_components/CabinList";
import Spinner from "../_components/Spinner";
import CabinNav from "../_components/CabinNav";

export default function Page({searchParams}) {
  const cabinCapacity = searchParams.capacity
  return (
    <div className="mx-20 my-8">
      <h1 className="text-3xl mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-md mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature's beauty in your own little home
        away from home. The perfect spot for a peaceful, calm vacation. Welcome
        to paradise.
      </p>

      <div className="flex justify-end">

      <CabinNav/>
      </div>

      <Suspense fallback={<Spinner />}>
        <CabinList  cabinCapacity= {cabinCapacity}/>
      </Suspense>
    </div>
  );
}
