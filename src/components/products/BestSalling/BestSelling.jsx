import React from 'react'
import Rating from '../todays/Products/Rating'
import allDatas from '../../../datas/allDatas';
import { Link, useParams } from 'react-router-dom';

const BestSelling = () => {

  const { category } = useParams();
  allDatas.find((product) => product.category === category);
  const home = allDatas.filter((s) => s.section === 'BestSelling');


  return (
    <>
      <div className='todays-container'>
      <div className="todays-title">
        
        <div className="flesh-sales">
          <div className="red-title">
            <div className="red"></div>
            <h3>This Month</h3>
          </div>

          <div className="todays-discription">
            <h3>Best Selling Products</h3>
          </div>
        </div>

        <div className="time-down">
          {/* <Time/> */}
        </div>
      </div>
      <div className="card-container">
      {home.map((home) => (
      <div key={home.category} className="card">
        <Link to={`/product/${home._id}`}>
          <div className="img-container">
            <img src={home.image} alt="" />
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
          <Link to={`/product/${home._id}`}>
            <h3>{home.name}</h3>
          </Link>

          <div className="price-rating">
            <span>{home.price}</span>
            <Rating value={home.rating} />
          </div>
        </div>
      </div>
               ))}  
    </div>
    </div>
          

    </>
  )
}

export default BestSelling
