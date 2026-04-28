import Link from 'next/link'
import React from 'react'

export default function LeftSide({ categories,isActiveId }) {
  return (
    <div>
        <h1 className="text-xl font-bold">All Categories</h1>
      
      <ul className="space-y-4 font-semibold text-gray-600 p-4">
        {
          categories.map(category=> <li key={category.category_id}className={isActiveId===category.category_id ?"bg-purple-500 text-white p-3": "p-3"} ><Link href={`/category/${category.category_id}`} className='inline'>{category.category_name}</Link></li>)
        }
      </ul>
    </div>
  )
}
