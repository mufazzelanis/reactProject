import React, { useState } from 'react'

function Blogs({ posts }) {

  const [visible, setVisible] = useState(8) // প্রথমে 10টা দেখাবে

  const handleLoadMore = () => {
    setVisible((prev) => prev + 10) // প্রতি click এ +10
  }

  return (
    <div className="mt-10">

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {posts.slice(0, visible).map((item) => (
          <div 
            key={item.id} 
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
          >
            <img 
              src={item.coverImage} 
              alt={item.title}
              className="w-full h-[180px] object-cover"
            />

            <div className="p-3">
              <h2 className="text-sm font-semibold text-gray-800">
                {item.title}
              </h2>
            </div>
            <div className="p-3">
              <p className="text-lg font-bold text-green-600">${item.price.toFixed(2)}</p>
            </div>
          </div>
        ))}

      </div>

      {/* See More Button */}
      {visible < posts.length && (
        <div className="flex justify-center mt-8">
          <button onClick={handleLoadMore} className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            See More
          </button>
        </div>
      )}

    </div>
  )
}

export default Blogs