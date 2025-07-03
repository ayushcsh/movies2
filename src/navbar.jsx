import React from 'react'
import { Link } from 'react-router-dom'

const navbar = () => {
  return (
    <div className='navbar flex w-full h-[70px] items-center justify-between bg-red-800 '>
        <div className="navbar-brand flex  text-[25px] font-bold m-[20px]">
            <Link to = '/' className='brand-link text-white '>Movieify</Link>
        </div>
        <div className="navbar-links flex gap-8  m-[20px]">
            <Link to = '/' className = 'home-link text-white md: text-[25px]  font-bold '>Home</Link>
            <Link to = '/favorites' className = 'home-link text-white text-[25px] font-bold'>Favorites</Link>
        </div>
      
    </div>
  )
}

export default navbar
