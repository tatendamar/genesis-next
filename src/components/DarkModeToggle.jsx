'use client'

import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { MdLightMode, MdDarkMode } from 'react-icons/md'

const DarkModeToggle = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div>
      {mounted && theme === 'dark' ? (
        <MdLightMode
          onClick={() => setTheme('light')}
          className="text-xl cursor-pointer hover:text-amber-400"
        />
      ) : (
        <MdDarkMode
          onClick={() => setTheme('dark')}
          className="text-xl cursor-pointer hover:text-amber-400"
        />
      )}
    </div>
  )
}

export default DarkModeToggle
