import React from 'react'
import { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import banner from '../assets/Images/flykoe-big-banner.png'
function Search() {
    const tags=[
  {
    id:1,
    name:'All',
  },
  {
    id:2,
    name:'React',
  },
  {
    id:3,
    name:'React Native',
  },
  {
    id:4,
    name:'Angular',
  },
]

const [activeindex, setActiveindex] = useState(0);
  return (
    <div className='flex justify-center mt-8 flex-col px-[70] md:px-[100px]'>
        <img src={banner} alt="Banner" className="rounded-2xl "/>

        <div className='bg-white shadow-lg p-3 rounded-lg mt-[-20px] mx-[25%] flex items-center'>
            <IoSearch className='text-gray-500 text-[20px]' />
            <input type="text" placeholder='Search...' className='outline-none ml-2'/>
        </div>

        <div className='flex gap-10 justify-center mt-5'>
            {tags.map((item, index)=>(
                <ul key={item.id} onClick={()=>setActiveindex(index)} className={`cursor-pointer ${activeindex === index ? 'text-red-500 font-bold' : 'text-gray-500 hover:scale-105 transition-all duration-200 ease-in-out'}`}>
                    <li>{item.name}</li>
                </ul>
            ))}
        </div>
    </div>
    
    
  )
}

export default Search