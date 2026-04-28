"use client"

import Link from "next/link"

export default function ThisIsErrorPages() {
  return (
    <div className="w-1/2 mx-auto text-center space-y-7 bg-base-200">
      <h1 className="text-4xl font-bold text-red-500">500</h1>
      <h1 className="text-xl font-semibold"> - Internal Server Error</h1>
      <p>Something went wrong on our end. Please try again later. Our Developer worked on fixing it.</p>
      <Link href="/" className="btn btn-primary">
        Go Home
      </Link>
    </div>
  )
}
