import React from 'react'
import NavbarItems from './NavbarItems'
import AddPage from '../app/addEnquiry/page'

const Navbar = () => {
  return (
    <div className="flex dark:bg-gray-600 bg-amber-100 p-4 lg:text-lg justify-center gap-4 ">
      <NavbarItems title="Properties For Sale" param="for-sale" />
      <NavbarItems title="Properties to Rent" param="to-rent" />
      <AddPage />
    </div>
  )
}

export default Navbar
