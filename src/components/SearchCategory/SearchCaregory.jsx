import React from 'react'
import category from './category'
import './SearchCaregory.css'

const SearchCaregory = () => {
  return (
    <>
      <div className='todays-container'>
      <div className="todays-title">
        
        <div className="flesh-sales">
          <div className="red-title">
            <div className="red"></div>
            <h3>Categories</h3>
          </div>

          <div className="todays-discription-all">
            <h3>Browse By Category</h3>
          </div>
        </div>

        <div className="time-down">
        </div>
      </div>
      <div className="category-container">
        {category.map((category) => (
          <div className='category'>
            {category.icon}
            {category.name}
          </div>
        ))}
      </div>
    </div>
          

    </>
  )
}

export default SearchCaregory
