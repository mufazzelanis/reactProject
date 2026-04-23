import React, { useEffect, useState } from 'react'
import Header from '../component/Header'
import Search from '../component/Search'
import Blogs from '../component/Blogs'
import IntroPost from '../component/IntroPost'
import Globalapi from '../Services/Globalapi'
import { GiPriceTag } from 'react-icons/gi'
import Footer from './../component/Footer';

function Home() {

  const [post, setPost] = useState([])

  useEffect(() => {
    getPost();
  }, [])

  const getPost = () => {
    Globalapi.getProducts().then(resp => {
      const result = resp.data.products.map(item => ({
        id: item.id,
        title: item.title,
        desc: item.description,
        tag: item.category,
        coverImage: item.thumbnail,
        price: item.price
      }));
      setPost(result)
    })
  }

  return (
    <div className='p-[20px]'>
      { /* Header */ }
      <Header />
      { /* Search */ }
      <Search />
      { /* IntroPost */ }
      {post.length>0? <IntroPost  post={post[0]} /> : null}
      { /* Blogs */ }
      {post.length > 0 ? <Blogs posts={post} /> : null}
      { /* Footer */ }
      <Footer />
      
    </div>
  )
}

export default Home