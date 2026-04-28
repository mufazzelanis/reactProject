import React from 'react'
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4 mt-5 rounded-t-xl">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-3 ">About</h3>
            <p className="text-gray-400 text-sm">A simple blog for sharing Airlines articles and insights.</p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-bold mb-3">Quick Links</h3>

            <ul className="text-gray-400 text-sm space-y-2">
              <li>
                <Link to="/" className="hover:text-white">Home</Link>
              </li>

              <li>
                <Link to="/blog-detail/" className="hover:text-white">Flight</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-3">Contact</h3>
            <p className="text-gray-400 text-sm">Email: Mufazzelanis@gmail.com</p>
            <p className="text-gray-400 text-sm">Phone: +8801518303867</p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Akij Air. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer