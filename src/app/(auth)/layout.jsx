import NavBar from '@/components/shared/NavBar'
import React from 'react'

export default function AuthLayout({children}) {
  return (
    <div>
      <NavBar></NavBar>
      <main>{children}</main>
    </div>
  )
}
