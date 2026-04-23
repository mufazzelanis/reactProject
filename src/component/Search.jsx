import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { IoSearch } from "react-icons/io5";
import banner from '../assets/Images/flykoe-big-banner.png'

function Search() {
    const navigate = useNavigate();
    const [tags, setTags] = useState([]);
    const [activeindex, setActiveindex] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');

    // Fetch tags from API (or use static data)
    useEffect(() => {
        // Replace with your API endpoint
        const tagData = [
            { id: 1, name: 'All', route: '/' },
            { id: 2, name: 'Flight', route: '/blog-detail?tag=Flight' },
            { id: 3, name: 'Hotel', route: '/hotel-detail?tag=Hotel' },
            { id: 4, name: 'Visa', route: '/visa-detail?tag=Visa' },
        ];
        setTags(tagData);
    }, []);

    const handleTagClick = (index, route) => {
        setActiveindex(index);
        navigate(route);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/blog-detail?search=${searchQuery}`);
        }
    };
  return (
    <div className='flex justify-center mt-8 flex-col px-[70] md:px-[100px]'>
        <img src={banner} alt="Banner" className="rounded-2xl "/>

        <form onSubmit={handleSearch} className='bg-white shadow-lg p-3 rounded-lg mt-[-20px] mx-[25%] flex items-center'>
            <IoSearch className='text-gray-500 text-[20px]' />
            <input 
                type="text" 
                placeholder='Search...' 
                className='outline-none ml-2 flex-1'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
        </form>

        <div className='flex gap-10 justify-center mt-5'>
            {tags.map((item, index)=>(
                <ul 
                    key={item.id} 
                    onClick={()=>handleTagClick(index, item.route)} 
                    className={`cursor-pointer ${activeindex === index ? 'text-red-500 font-bold' : 'text-gray-500 hover:scale-105 transition-all duration-200 ease-in-out'}`}
                >
                    <li>{item.name}</li>
                </ul>
            ))}
        </div>
    </div>
    
    
  )
}

export default Search