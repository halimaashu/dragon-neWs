"use client";
import Image from "next/image";
import Link from "next/link";
import Adverter from "@/assets/user.png";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";
import { HiH2 } from "react-icons/hi2";

export default function NavBar() {
  const { data: session, isPending } = authClient.useSession();
  const users = session?.user;
  console.log(users, isPending, "namvber page fropm sassipn...............");
  return (
    <nav className="flex justify-between py-10 px-3">
      <div className=""></div>
      <ul className="flex justify-between gap-5 text-gray-600">
        <li>
          <NavLink href="/">Home</NavLink>
        </li>
        <li>
          <NavLink href="/about">About</NavLink>
        </li>
        <li>
          <NavLink href="/career" className={"text-red-500"}>
            Career
          </NavLink>
        </li>
      </ul>
      <div className="flex gap-5 justify-center items-center">
        
        {users ? (
          <>
          <h1 className="text-2xl font-bold"><span className="text-orange-500">H!</span> {users?.name}</h1>
          <Image alt="user photo" height={40} width={40} className="rounded-full" src={users?.image||Adverter}/>
          <button onClick={async()=>await authClient.signOut()} className="btn bg-purple-500 text-white px-8">log out</button>
          </>
        ) : (
          <Link href="/login">
            <button className="btn bg-purple-500 text-white px-8">login</button>
          </Link>
        )}
      </div>
    </nav>
  );
}
