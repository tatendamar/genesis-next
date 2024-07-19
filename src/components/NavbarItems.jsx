'use client'

import Link from 'next/link'
import React from 'react'
import { useSearchParams } from 'next/navigation'

const NavbarItems = ({ title, param }) => {
  const searchParams = useSearchParams()
  const search = searchParams.get('search')

  return (
    <div>
      <Link
        className={`hover:text-amber-600 font-semibold ${
          search === param
            ? 'underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg'
            : ''
        }`}
        href={`/?search=${param}`}
      >
        {title}
      </Link>
    </div>
  )
}

export default NavbarItems
