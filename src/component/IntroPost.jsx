import React, { useEffect } from 'react'
import Globalapi from '../Services/Globalapi'

function IntroPost() {

  useEffect(() => {
    getPost();
  }, []);

  const getPost = () => {
    Globalapi.getProducts().then((res) => {
      console.log(res.data);
    });
  };

  return (
    <div>IntroPost</div>
  )
}

export default IntroPost