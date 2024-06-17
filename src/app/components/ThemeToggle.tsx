'use client'

import React, { useEffect, useState } from 'react'
import { BsSunFill } from 'react-icons/bs'
import { FaMoon } from 'react-icons/fa'

const ThemeToggle = () => {
const [darkMode, setDarkmode] = useState(true)


useEffect(() => {
    console.log("Initial Theme")
    const theme = localStorage.getItem("theme")
    if(theme === 'dark') setDarkmode(true)
}, [])

useEffect(() => {
    console.log("Here is the reason of changing theme after changing lang!! ")
}, [darkMode])


const handleClick = () => {
    setDarkmode(!darkMode)
    if(darkMode) {
        document.documentElement.classList.add('dark')
        localStorage.setItem("theme", "dark")
        console.log("Here dark")
    } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem("theme", "light")
        console.log("Here light")
    }
}

  return (
    <div
        className='relative w-16 h-8 flex items-center dark:bg-slate-600 bg-sky-300 cursor-pointer rounded-full p-1'
        onClick={handleClick}
   >
       <FaMoon className='text-white' size={18} />
       <div className='absolute bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300'
       style={darkMode ? {left: '2px'} : {right: "2px"}}
       >
        <BsSunFill 
        className='mx-auto mt-0.5 text-yellow-400' size={18}
        />
       </div>
    </div>
  )
}

export default ThemeToggle
