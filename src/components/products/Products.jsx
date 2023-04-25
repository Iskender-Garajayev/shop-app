import React from 'react'
import data from '../../data'
import './Product.css'

const Products = () => {
  return (
    <>

      {data.map((data) => (
        <img src={data.image} alt="" />
      ))}
   
    </>
  )
}

export default Products