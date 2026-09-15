import React from 'react'
import ProfileInfoCard from '../Cards/ProfileInfoCard'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="h-16 bg-white border border-b border-gray-200/50 backdrop-blur-[2px] py-2.5 px-4 md:px-20 sticky top-0 z-30">
      <div className="container mx-auto flex items-center justify-between gap-5">
       <Link to="/dashboard" className="flex items-center">


       <div className="flex flex-col">
    
    {/* Main Logo Text */}
    <h1 className="text-3xl font-bold tracking-wide text-gray-800">
      RESUMIFY
    </h1>

    {/* Tagline */}
    <span className="text-sm text-gray-500 -mt-1">
      CV Maker
    </span>

  </div>


       
        {/* <img
         src="https://www.resumify.org/assets/img/logo-dark.png"
         alt="Logo" */}
         {/* className="h-12 w-auto object-contain"/> */}
       </Link>

        <ProfileInfoCard />
      </div>
    </div>
  )
}

export default Navbar

