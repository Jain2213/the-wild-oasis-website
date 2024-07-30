import { getCabins } from "../_lib/data-service";
import CabinCard from "./CabinCard";

export default async function CabinList({cabinCapacity}) {
  const cabins = await getCabins();
  console.log(cabinCapacity)

  if (!cabins.length) return null;
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14 items-center">
      {cabins.map((cabin) =>{
        if(cabinCapacity==="small" && cabin.maxCapacity<=2){
          return <CabinCard cabin={cabin} key={cabin.id} />
        }else if(cabinCapacity==="medium" && cabin.maxCapacity>2 && cabin.maxCapacity<8){
          return <CabinCard cabin={cabin} key={cabin.id} />
        }else if(cabinCapacity==="large" && cabin.maxCapacity>=8){
          return <CabinCard cabin={cabin} key={cabin.id} />
        }else if(cabinCapacity==="all"){
          return <CabinCard cabin={cabin} key={cabin.id} />
        }else if(!cabinCapacity){
          return <CabinCard cabin={cabin} key={cabin.id} />
        }
      
      }
      
      )}
    </div>
  );
}
