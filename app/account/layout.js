import { Suspense } from "react";
import SideNavigation from "../_components/SideNavigation";
import Spinner from "../_components/Spinner";

export default function Layout({ children }) {
  return (
    <Suspense fallback={<Spinner/>}>
    <div className="flex px-32 py-10">
      <div className="basis-1/4">
        <SideNavigation />
      </div>

      <main className="basis-full	">{children}</main>
    </div>
    </Suspense>
  );
}
