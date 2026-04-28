import React from 'react'
import { Users, Target, Heart, Mail, Phone, MapPin } from 'lucide-react'
import Header from '../component/Header'

function About() {
  return (
    
    <div className="w-full">
         <Header />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg text-blue-100">Making travel simple, affordable, and accessible for everyone</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        
        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow p-8">
            <div className="flex items-center gap-3 mb-4">
              <Target className="text-indigo-600" size={28} />
              <h2 className="text-2xl font-bold text-gray-800">Our Mission</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              We are dedicated to providing seamless travel solutions that connect people with their dream destinations. Our goal is to make every traveler's journey simple and memorable.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow p-8">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="text-red-500" size={28} />
              <h2 className="text-2xl font-bold text-gray-800">Why We Care</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Travel is about creating unforgettable memories and experiences. We believe everyone deserves access to great travel options at affordable prices with excellent customer service.
            </p>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-indigo-50 p-6 rounded-lg text-center">
              <p className="text-4xl font-bold text-indigo-600 mb-2">50K+</p>
              <p className="text-gray-700">Happy Customers</p>
            </div>
            <div className="bg-indigo-50 p-6 rounded-lg text-center">
              <p className="text-4xl font-bold text-indigo-600 mb-2">100+</p>
              <p className="text-gray-700">Destinations</p>
            </div>
            <div className="bg-indigo-50 p-6 rounded-lg text-center">
              <p className="text-4xl font-bold text-indigo-600 mb-2">24/7</p>
              <p className="text-gray-700">Customer Support</p>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <Mail className="text-indigo-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <p className="font-semibold text-gray-800 mb-1">Email</p>
                <a href="mailto:info@example.com" className="text-indigo-600 hover:underline">support@akijair.com</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="text-indigo-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <p className="font-semibold text-gray-800 mb-1">Phone</p>
                <a href="tel:+1234567890" className="text-indigo-600 hover:underline">+880 9613 500 850</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="text-indigo-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <p className="font-semibold text-gray-800 mb-1">Address</p>
                <p className="text-gray-600">AKIJ HOUSE, 198 BIR UTTAM MIR
                    SHAWKAT SARAK, TEJGAON,
                    Dhaka-1212, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About