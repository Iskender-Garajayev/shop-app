import React from 'react'
import Time from '../../time/Time'
import Products from './Products/Products'
import './tudaysProduct.css'

const TodaysProducts = () => {
  return (
    <div className='todays-container'>
      <div className="todays-title">
        
        <div className="flesh-sales">
          <div className="red-title">
            <div className="red"></div>
            <h3>today's</h3>
          </div>

          <div className="todays-discription">
            <h3>flesh sales</h3>
          </div>
        </div>

        <div className="time-down">
          <Time/>
        </div>
      </div>
      <Products/>
    </div>
  )
}

export default TodaysProducts
