import React from 'react'
import allDatas from '../../../datas/allDatas';
import { Link, useParams } from 'react-router-dom';
import Rating from '../todays/Products/Rating';

const Explore = () => {

  const { category } = useParams();
  allDatas.find((product) => product.category === category);
  const home = allDatas.filter((h) => h.section === 'Explore');

  return (
    <>

<div className='todays-container'>
      <div className="todays-title">
        
        <div className="flesh-sales">
          <div className="red-title">
            <div className="red"></div>
            <h3>Our Products</h3>
          </div>

          <div className="todays-discription-all">
            <h3>Explore Our Products</h3>
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

export default Explore
