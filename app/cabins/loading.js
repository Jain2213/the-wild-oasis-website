import Spinner from "../_components/Spinner";

export default function Loading() {
  return (
    <div className="grid items-center justify-center">
      <Spinner />
      <div className="text-xl text-primary-200">Loading Cabins Data...</div>
    </div>
  );
}
