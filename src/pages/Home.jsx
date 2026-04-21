import React from 'react'
import Header from '../component/Header'
import Search from '../component/Search'
import IntroPost from '../component/IntroPost'
import Blogs from '../component/Blogs'
import Footer from '../component/Footer'

function Home() {
  return (
    <div>
      { /* Header */ }
      <Header />
      { /* Search */ }
      <Search />
      { /* IntroPost */ }
      <IntroPost />
      { /* Blogs */ }
      {/* <Blogs /> */}
      { /* Footer */ }
      {/* <Footer /> */}
    </div>
  )
}

export default Home