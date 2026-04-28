"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'


export default function NavLink({href,children,className}) {
    const pathName=usePathname();
    console.log(pathName,"lksfjsdagdfiua");
    const isActive=pathName===href;
  return (
    <div>
      <Link className={`${className} ${isActive ? "text-purple-500 font-bold border-b border-b-purple-500" : "text-gray-600"}`} href={href}>
        {children}
      </Link>
    </div>
  )
}
