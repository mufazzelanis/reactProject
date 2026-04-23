import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IoLogoYoutube } from "react-icons/io5";
import logo from './../assets/Images/AkijAir.png'

function Header() {
  const navigate = useNavigate();

  const navLinks = [
    { label: 'Home', route: '/' },
    { label: 'About Us', route: '/about' },
    { label: 'Contact Us', route: '/contact' }
  ];

  return (
    <header className="w-full shadow-md bg-white sticky top-0 z-50">
      <div className="w-full px-6 py-3 flex items-center justify-between">

        <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
          <img src={logo} alt="Logo" className="w-[150px] md:w-[180px] h-auto object-contain" />
        </div>

        <nav>
          <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">
            {navLinks.map((link, idx) => (
              <li 
                key={idx}
                onClick={() => navigate(link.route)}
                className="hover:text-red-500 cursor-pointer transition duration-200"
              >
                {link.label}
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <button 
            onClick={() => window.open('https://youtu.be/1tNiL2sy15U?si=ZEsx_ooHvsDckm36', '_blank')}
            className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-full transition duration-300 shadow-sm flex items-center cursor-pointer"
          >
            Subscribe <IoLogoYoutube className="inline-block ml-3 text-[20px]" />
          </button>
        </div>

      </div>
    </header>
  )
}

export default Header