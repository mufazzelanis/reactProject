import React, { useState } from 'react'
import Header from '../component/Header'

const amenities = [
  { icon: '♨', name: 'Private pool' },
  { icon: '◎', name: 'Ocean view' },
  { icon: '◈', name: 'Free WiFi' },
  { icon: '✦', name: 'Concierge 24h' },
  { icon: '⊕', name: 'Breakfast' },
  { icon: '◐', name: 'Spa access' },
]

const rooms = [
  { name: 'Caldera Suite', size: '48 m² · King bed · Sea view', price: '$480 / night', bg: 'from-[#2a2018] to-[#4a3828]' },
  { name: 'Sky Penthouse', size: '92 m² · 2 beds · Panoramic', price: '$890 / night', bg: 'from-[#1e2a2c] to-[#2a3c3e]' },
]

function HotelDetail() {
  const [guests, setGuests] = useState(2)

  return (
    <div className="font-['Outfit',sans-serif] bg-[#faf8f5] text-[#1a1814] min-h-screen">
        <Header />
      {/* Hero */}
      <div className="relative h-[420px] bg-[#1a1814] overflow-hidden flex items-end">
        <div className="absolute inset-0 grid grid-cols-[1.8fr_1fr] grid-rows-2 gap-[3px]">
          <div className="row-span-2 bg-gradient-to-br from-[#2a2018] via-[#4a3828] to-[#3a2c1e]" />
          <div className="bg-gradient-to-br from-[#1e2a2c] to-[#2a3c3e]" />
          <div className="bg-gradient-to-br from-[#1e1e2a] to-[#2a2a3c]" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(15,12,8,0.85)] via-[rgba(15,12,8,0.1)] to-transparent" />
        <div className="relative z-10 px-10 pb-8 w-full">
          <p className="text-[10px] tracking-[3px] uppercase text-[#c9a96e] font-medium mb-2">Luxury Collection</p>
          <h1 className="font-['Cormorant_Garamond',serif] text-5xl font-semibold text-[#f5f0e8] leading-tight mb-2">
            The Maison Aurore
          </h1>
          <p className="text-[13px] text-[rgba(245,240,232,0.6)] flex items-center gap-2">
            <span className="w-[5px] h-[5px] rounded-full bg-[#c9a96e] inline-block" />
            Santorini, Greece · Oia Cliffs
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="grid grid-cols-[1fr_320px]">

        {/* Main Content */}
        <div className="p-10">
          {/* Ratings */}
          <div className="flex items-center gap-5 mb-7 pb-6 border-b border-[#e8e2d8]">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-[14px] h-[14px] bg-[#c9a96e]"
                  style={{ clipPath: 'polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)' }} />
              ))}
            </div>
            <span className="text-2xl font-medium">4.97</span>
            <span className="text-xs text-gray-400 font-light">284 reviews</span>
            <span className="text-[10px] tracking-wide uppercase bg-[#e8f4ed] text-[#2a6e44] px-3 py-1 rounded-full font-medium">
              Superhost
            </span>
          </div>

          {/* Description */}
          <h2 className="font-['Cormorant_Garamond',serif] text-xl font-semibold italic mb-3">About this retreat</h2>
          <p className="text-[13.5px] text-[#5a5550] leading-relaxed font-light mb-4">
            Perched above the caldera with unobstructed views of the Aegean, Maison Aurore is a sanctuary of whitewashed stone and curated calm. Each suite is oriented toward the horizon — where volcanic cliffs dissolve into cobalt sea.
          </p>
          <p className="text-[13.5px] text-[#5a5550] leading-relaxed font-light mb-8">
            Designed by architect Sofia Petrakis, the property blends traditional Cycladic forms with contemporary restraint. Locally sourced marble, handwoven linens, and a private plunge pool define the experience.
          </p>

          {/* Amenities */}
          <h2 className="font-['Cormorant_Garamond',serif] text-xl font-semibold italic mb-4">What's included</h2>
          <div className="grid grid-cols-3 gap-3 mb-8">
            {amenities.map((a) => (
              <div key={a.name} className="flex items-center gap-3 bg-white border border-[#e8e2d8] rounded-xl px-4 py-3">
                <div className="w-8 h-8 rounded-lg bg-[#f5f0e8] flex items-center justify-center text-sm flex-shrink-0">{a.icon}</div>
                <span className="text-xs text-[#3a3530]">{a.name}</span>
              </div>
            ))}
          </div>

          {/* Rooms */}
          <h2 className="font-['Cormorant_Garamond',serif] text-xl font-semibold italic mb-4">Choose your suite</h2>
          <div className="grid grid-cols-2 gap-3">
            {rooms.map((r) => (
              <div key={r.name} className="bg-white border border-[#e8e2d8] rounded-xl overflow-hidden">
                <div className={`h-24 bg-gradient-to-br ${r.bg}`} />
                <div className="p-3">
                  <p className="text-sm font-medium text-[#1a1814] mb-1">{r.name}</p>
                  <p className="text-[11px] text-gray-400 font-light">{r.size}</p>
                  <p className="text-sm font-medium text-[#c9a96e] mt-2">{r.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="p-7 pl-0 sticky top-0 self-start">
          {/* Booking Card */}
          <div className="bg-white border border-[#e8e2d8] rounded-2xl p-6 mb-4">
            <div className="flex items-baseline gap-2 mb-1">
              <span className="font-['Cormorant_Garamond',serif] text-4xl font-semibold">$480</span>
              <span className="text-xs text-gray-400 font-light">/ night</span>
              <span className="text-sm text-gray-300 line-through font-light">$620</span>
            </div>
            <p className="text-[11px] text-gray-400 font-light mb-4">4.97 · 284 reviews</p>

            <div className="h-px bg-[#e8e2d8] mb-4" />

            {/* Dates */}
            <div className="grid grid-cols-2 border border-[#e8e2d8] rounded-xl overflow-hidden mb-3">
              {[['Check-in', 'Jul 14'], ['Check-out', 'Jul 21']].map(([label, val], i) => (
                <div key={label} className={`p-3 ${i === 0 ? 'border-r border-[#e8e2d8]' : ''}`}>
                  <p className="text-[9px] tracking-[2px] uppercase text-gray-400 font-medium mb-1">{label}</p>
                  <p className="text-sm font-medium">{val}</p>
                </div>
              ))}
            </div>

            {/* Guests */}
            <div className="flex justify-between items-center border border-[#e8e2d8] rounded-xl px-4 py-3 mb-5">
              <p className="text-[9px] tracking-[2px] uppercase text-gray-400 font-medium">Guests</p>
              <div className="flex items-center gap-3">
                <button onClick={() => setGuests(Math.max(1, guests - 1))}
                  className="w-7 h-7 rounded-full border border-[#d8d2c8] flex items-center justify-center text-lg text-[#5a5550] hover:bg-[#f5f0e8] hover:border-[#c9a96e] transition-colors">−</button>
                <span className="text-base font-medium w-4 text-center">{guests}</span>
                <button onClick={() => setGuests(Math.min(10, guests + 1))}
                  className="w-7 h-7 rounded-full border border-[#d8d2c8] flex items-center justify-center text-lg text-[#5a5550] hover:bg-[#f5f0e8] hover:border-[#c9a96e] transition-colors">+</button>
              </div>
            </div>

            {/* Price breakdown */}
            {[['$480 × 7 nights', '$3,360'], ['Cleaning fee', '$85'], ['Service fee', '$210']].map(([label, val]) => (
              <div key={label} className="flex justify-between text-xs text-gray-400 font-light mb-2">
                <span>{label}</span><span>{val}</span>
              </div>
            ))}
            <div className="flex justify-between text-sm font-medium text-[#1a1814] pt-3 border-t border-[#e8e2d8] mt-2 mb-4">
              <span>Total</span><span>$3,655</span>
            </div>

            <button className="w-full py-3.5 bg-[#1a1814] text-[#f5f0e8] rounded-xl text-sm font-medium tracking-wide hover:bg-[#2c2416] transition-colors">
              Reserve now
            </button>
            <p className="text-[11px] text-gray-300 text-center mt-3 font-light">Free cancellation until Jul 7</p>
          </div>

          {/* Host Card */}
          <div className="bg-white border border-[#e8e2d8] rounded-2xl p-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#c9a96e] to-[#a07840] flex items-center justify-center text-white font-semibold text-base flex-shrink-0">S</div>
              <div>
                <p className="text-sm font-medium">Sofia Petrakis</p>
                <p className="text-[11px] text-gray-400 font-light">Host since 2018</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {[['284', 'Reviews'], ['99%', 'Response rate']].map(([num, lbl]) => (
                <div key={lbl} className="bg-[#faf8f5] rounded-lg py-2.5 text-center">
                  <span className="text-base font-medium block">{num}</span>
                  <span className="text-[10px] text-gray-400 font-light">{lbl}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HotelDetail