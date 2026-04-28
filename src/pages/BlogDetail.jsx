import React from 'react'
import { useState } from 'react'
import Header from '../component/Header'
import { Star, MapPin, Calendar, Clock, Users, Plane, AlertCircle } from 'lucide-react'

function BlogDetail() {
  const [passengers, setPassengers] = useState(1);
  const [selectedSeat, setSelectedSeat] = useState(null);

  // Sample flight data - replace with API data
  const flightData = {
    id: 1,
    airline: 'SkyWings Airlines',
    flightNumber: 'SW-2024',
    departure: {
      city: 'New York',
      code: 'JFK',
      time: '14:30',
      date: 'Apr 22, 2024'
    },
    arrival: {
      city: 'Los Angeles',
      code: 'LAX',
      time: '17:45',
      date: 'Apr 22, 2024'
    },
    duration: '5h 15m',
    stops: 'Non-stop',
    basePrice: 250,
    tax: 30,
    rating: 4.5,
    reviews: 1240,
    aircraft: 'Boeing 777-300',
    amenities: [
      { icon: '🍽️', name: 'Meals Included' },
      { icon: '📺', name: 'Entertainment' },
      { icon: '🛏️', name: 'Extra Legroom' },
      { icon: '🎒', name: 'Free Baggage' }
    ]
  };

  const totalPrice = (flightData.basePrice + flightData.tax) * passengers;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <Header />
        
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">{flightData.airline}</h1>
              <p className="text-gray-500">Flight {flightData.flightNumber}</p>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-2">
                <Star className="text-yellow-400 fill-yellow-400" size={20} />
                <span className="text-lg font-bold">{flightData.rating}</span>
                <span className="text-gray-600">({flightData.reviews} reviews)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Flight Details */}
        <div className="grid lg:grid-cols-3 gap-6 mb-6">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Journey Info */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex justify-between items-center mb-8">
                {/* Departure */}
                <div className="text-center flex-1">
                  <p className="text-gray-500 text-sm mb-2">Departure</p>
                  <h2 className="text-4xl font-bold text-gray-800">{flightData.departure.code}</h2>
                  <p className="text-gray-600 mt-2">{flightData.departure.city}</p>
                  <p className="text-lg font-semibold text-indigo-600 mt-2">{flightData.departure.time}</p>
                  <p className="text-gray-500 text-sm">{flightData.departure.date}</p>
                </div>

                {/* Flight Path */}
                <div className="flex-1 mx-8">
                  <div className="flex items-center justify-center">
                    <Plane className="text-indigo-600" size={32} />
                  </div>
                  <p className="text-center text-gray-600 text-sm mt-2">{flightData.duration}</p>
                  <p className="text-center text-gray-500 text-xs mt-1">{flightData.stops}</p>
                </div>

                {/* Arrival */}
                <div className="text-center flex-1">
                  <p className="text-gray-500 text-sm mb-2">Arrival</p>
                  <h2 className="text-4xl font-bold text-gray-800">{flightData.arrival.code}</h2>
                  <p className="text-gray-600 mt-2">{flightData.arrival.city}</p>
                  <p className="text-lg font-semibold text-indigo-600 mt-2">{flightData.arrival.time}</p>
                  <p className="text-gray-500 text-sm">{flightData.arrival.date}</p>
                </div>
              </div>

              {/* Flight Details */}
              <div className="border-t pt-6 grid grid-cols-2 gap-6 text-sm">
                <div>
                  <p className="text-gray-500 mb-1">Aircraft</p>
                  <p className="font-semibold text-gray-800">{flightData.aircraft}</p>
                </div>
                <div>
                  <p className="text-gray-500 mb-1">Flight Class</p>
                  <p className="font-semibold text-gray-800">Economy</p>
                </div>
              </div>
            </div>

            {/* Amenities */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">In-Flight Amenities</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {flightData.amenities.map((amenity, idx) => (
                  <div key={idx} className="text-center p-4 bg-indigo-50 rounded-lg">
                    <p className="text-3xl mb-2">{amenity.icon}</p>
                    <p className="text-sm text-gray-700">{amenity.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Passenger Info */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Passenger Details</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
                  <input type="text" placeholder="Mufazzel Hossain" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Email</label>
                    <input type="email" placeholder="mufazzel@ibos.io" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Phone</label>
                    <input type="tel" placeholder="+880 9613 500 850" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-4">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Price Summary</h3>
              
              {/* Passenger Count */}
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-3 flex items-center gap-2">
                  <Users size={18} /> Passengers
                </label>
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => setPassengers(Math.max(1, passengers - 1))}
                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span className="text-lg font-bold">{passengers}</span>
                  <button 
                    onClick={() => setPassengers(passengers + 1)}
                    className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="bg-gray-50 p-4 rounded-lg mb-6 space-y-2 text-sm">
                <div className="flex justify-between text-gray-700">
                  <span>Base Price × {passengers}</span>
                  <span>${(flightData.basePrice * passengers).toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Tax × {passengers}</span>
                  <span>${(flightData.tax * passengers).toFixed(2)}</span>
                </div>
                <div className="border-t pt-2 flex justify-between font-bold text-gray-800">
                  <span>Total</span>
                  <span className="text-indigo-600 text-lg">${totalPrice.toFixed(2)}</span>
                </div>
              </div>

              {/* Alert */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-6 flex gap-2 text-sm text-yellow-800">
                <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
                <span>Limited seats available at this price</span>
              </div>

              {/* Book Button */}
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-lg transition mb-3">
                Book Now
              </button>

              {/* Terms */}
              <p className="text-xs text-gray-500 text-center">
                By booking, you agree to our <a href="#" className="text-indigo-600">terms and conditions</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogDetail