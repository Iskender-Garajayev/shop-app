import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/footer/Footer'
import Main from '../../components/main/Main'
import TodaysProducts from '../../components/products/todays/TodaysProducts'
import Explore from '../../components/products/Explore/Explore'
import BestSelling from '../../components/products/BestSalling/BestSelling'
import SearchCaregory from '../../components/SearchCategory/SearchCaregory'

const Home = () => {
  return (
    <div>
      <Header/>
      <Main/>
      <TodaysProducts/>
      <SearchCaregory/>
      <BestSelling/>
      <Explore/>
      <Footer/>
    </div>
  )
}

export default Home
