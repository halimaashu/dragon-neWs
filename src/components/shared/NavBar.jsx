import Image from "next/image";
import Link from "next/link";
import user from "@/assets/user.png";
import NavLink from "./NavLink";

export default function NavBar() {
  return (
    <nav className="flex justify-between py-10 px-3">
      <div className=""></div>
      <ul className="flex justify-between gap-5 text-gray-600">
        <li><NavLink href="/">Home</NavLink></li>
        <li><NavLink href="/about">About</NavLink></li>
        <li><NavLink href="/career" className={"text-red-500"}>Career</NavLink></li>
      </ul>
      <div className="flex gap-5">
        <Image src={user} alt="User" width={40} height={40} />
      <Link href="/login">
        <button className="btn bg-purple-500 text-white px-8">
          login
        </button>
      </Link>
      </div>
    </nav>
  );
}
