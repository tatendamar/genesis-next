import React from 'react'
import Menu from './Menu'
import { AiFillHome } from 'react-icons/ai'
import { BsFillInfoCircleFill } from 'react-icons/bs'
import DarkModeToggle from './DarkModeToggle'

const Header = () => {
  return (
    <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
      <h1 className="flex">Logo</h1>
      <div className="flex gap-4">
        <Menu title="Home" address="/" Icon={AiFillHome} />
        <Menu title="About" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className="flex items-center gap-4">
        <DarkModeToggle />
        <div className="flex gap-1 items-center">
          <button
            type="button"
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
