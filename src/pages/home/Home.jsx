import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/footer/Footer'
import Main from '../../components/main/Main'
import TodaysProducts from '../../components/products/todays/TodaysProducts'
import Explore from '../../components/products/Explore/Explore'

const Home = () => {
  return (
    <div>
      <Header/>
      <Main/>
      <TodaysProducts/>
      <Explore/>
      <Footer/>
    </div>
  )
}

export default Home
