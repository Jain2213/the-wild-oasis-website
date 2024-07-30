import { auth } from "../_lib/auth";

export default async function Page() {
  const session = await auth()
  const {name} = session?.user
  return <h1 className="m-10 text-2xl font-bold text-accent-400">Welcome, {name.split(" ").at(0)}</h1>;
}
