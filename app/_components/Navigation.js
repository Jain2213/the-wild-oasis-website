import Image from "next/image"
import {auth} from '@/app/_lib/auth'

export default async function Navigation() {

  const session = await auth()
  
  return (
    <nav className="z-10 text-xl p-7">
      <ul className="flex gap-16 items-center text-white">
        <li>
          <a href="/cabins" className="hover:text-accent-400 transition-colors">
            Cabins
          </a>
        </li>
        <li>
          <a href="/about" className="hover:text-accent-400 transition-colors">
            About
          </a>
        </li>
        
        <li className="flex w-36 justify-between">
         {session && <img className="border border-black rounded-full" src={session?.user?.image} height={34} width={34} />}

          <a
            href="/account"
            className="hover:text-accent-400 transition-colors"
          >
            Guest area
          </a>
        </li>
      </ul>
    </nav>
  );
}
