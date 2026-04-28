import Link from 'next/link'
import React from 'react'

export default function NotFoundPages() {
  return (
    <div className="shadow-lg rounded-md p-10 text-center space-y-6 w-1/2 mx-auto h-screen bg-base-200 flex justify-center flex-col items-center">
      <h1 className="text-4xl font-bold text-green-500">404</h1>
      <h1 className="text-xl font-semibold"> - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link href="/" className="btn btn-primary px-10 ">
        Go Home
      </Link>
    </div>
  )
}
