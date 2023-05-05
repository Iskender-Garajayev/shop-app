import React from 'react'
import allDatas from '../../../datas/allDatas';
import Header from '../../Header/Header';
import Footer from '../../footer/Footer';
import { Link, useParams } from 'react-router-dom';
import Rating from '../todays/Products/Rating';



const HomeLifestyle = () => {
  // const { category } = useParams();
  // const product = allDatas.find((product) => product.category === category);
  const home = allDatas.filter((h) => h.category === 'home');
  


  return (
    <>
      <Header/>
    
    <div className="card-container">
      {home.map((home) => (
      <div className="card">
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
    <Footer/>
    </>
  )
}

export default HomeLifestyle
