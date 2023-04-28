import React from 'react'
import Time from '../../time/Time'
import Products from './Products/Products'

const TodaysProducts = () => {
  return (
    <div className='todays-container'>
      <div className="todays-title">
        
        <div className="flesh-sales">

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
