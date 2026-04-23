import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Home from './pages/Home'
import { Route,Routes } from 'react-router-dom'
import BlogDetail from './pages/BlogDetail'
import HotelDetail from './pages/HotelDetail'
import VisaDetail from './pages/VisaDetail'
import About from './pages/about'
import Contact from './pages/contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/blog-detail" element={<BlogDetail />} />
    <Route path="/hotel-detail" element={<HotelDetail />} />
    <Route path="/visa-detail" element={<VisaDetail />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App;
