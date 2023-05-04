import React from 'react'
import { Link, useParams } from 'react-router-dom'
import data from '../../../datas/data'
import Rating from '../todays/Products/Rating'

const Categories = () => {

  const {category} = useParams() 

  const product = data.find((product) => product.category === category);


  return (
    <div>
          <div className="card">
              <Link to={`/product/${data._id}`} >
            <div className="img-container">
              <img src={product.image} alt="" />
              {/* <div className="add-to-card">
                <p>Add to Cart</p>
                <i className="fas fa-cart-plus"></i>
              </div> */}
              <div className="card-icons">
              <ion-icon name="heart-outline"></ion-icon>
              <ion-icon name="eye-outline"></ion-icon>

              </div>
            </div>
              </Link>
            <div className="card-title">
              <Link to={`/product/${data._id}`}>
                <h3>{product.name}</h3>
              </Link>

              <div className="price-rating">
                <span>{product.price}</span>
                <Rating value={product.rating} />
              </div>
            </div>
            </div>
    </div>
  )
}

export default Categories
