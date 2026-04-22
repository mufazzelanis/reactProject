import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Home from './pages/Home'
import { Route,Routes } from 'react-router-dom'
import BlogDetail from './pages/BlogDetail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/blog-detail" element={<BlogDetail />} />
    </Routes>
  )
}

export default App
