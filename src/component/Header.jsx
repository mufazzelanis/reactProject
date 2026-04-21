import React from 'react'
import {IoLogoYoutube} from "react-icons/io5";
import logo from './../assets/Images/AkijAir.png'

function Header() {
  return (
    <header className="w-full shadow-md bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-[150px] md:w-[180px] h-auto object-contain"/>
        </div>

        <nav>
          <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">
            <li className="hover:text-red-500 cursor-pointer transition duration-200">
              Home
            </li>
            <li className="hover:text-red-500 cursor-pointer transition duration-200">
              About Us
            </li>
            <li className="hover:text-red-500 cursor-pointer transition duration-200">
              Contact Us
            </li>
          </ul>
        </nav>

        <div>
          <button className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-full transition duration-300 shadow-sm flex items-center">
            Subscribe <IoLogoYoutube className="inline-block ml-3 text-[20px]" />
          </button>
        </div>

      </div>
    </header>
  )
}

export default Header