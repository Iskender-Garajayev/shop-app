import React from 'react'
import data from '../../data'
import './Product.css'

const Products = () => {
  return (
    <>
      <div className="card-container">

      {data.map((data) => (
        <div className="card">
          <img src={data.image} alt="" />
          <div className="title">
            <h3>{data.name}</h3>
            <span>{data.price}</span>
          </div>
        </div>
      ))}
      </div>
   
    </>
  )
}

export default Products