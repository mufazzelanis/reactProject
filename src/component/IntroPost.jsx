import React from 'react'
import { Link } from "react-router-dom";

function IntroPost({ post }) {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 px-4 md:px-10 lg:px-20 items-center">

      {/* Image Section */}
      <div className="w-full h-[300px] md:h-[400px] overflow-hidden rounded-2xl shadow-lg">
        <img 
          src={post.coverImage}  
          alt={post.title}
          className="w-full h-full object-cover hover:scale-105 transition duration-500"
        />
      </div>

      {/* Content Section */}
      <div>

        {/* Tag */}
        <span className="inline-block bg-red-100 text-red-500 text-sm px-3 py-1 rounded-full mb-3">
          {post.tag}
        </span>

        {/* Title */}
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 leading-tight">
          {post.title}
        </h1>

        {/* Description */}
        <p className="text-gray-500 mt-4 leading-relaxed line-clamp-5">
          {post.desc}
        </p>

      <Link
        to={`/blog-detail/`}
        className="mt-6 inline-block px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
      >
        Read More →
      </Link>

      </div>

    </div>
  )
}

export default IntroPost