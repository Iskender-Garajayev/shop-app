import React, { useState } from "react";
// import data from "../../../../datas/data";
import { Link, useParams } from "react-router-dom";
import "./ProductScreen.css";
import Rating from "./Rating";
import Header from "../../../Header/Header";
import Footer from "../../../footer/Footer";
import Products from "./Products";
import allDatas from "../../../../datas/allDatas";

// import axios from "axios";

function ProductScreen({ match }) {
  const { id } = useParams();
  const product = allDatas.find((product) => product._id === id);
  

 
  const [count, setCount] = useState(1)

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }

  return (
    <div>
      <Header />

        <Link to="/">Go back</Link>
      <div className="product-screen-container">

        <div className="image-container">
          <img
            className="sigle-priduct"
            src={product.image}
            alt={product.name}
          />
        </div>

        {/* <div>
          <img className="sigle-priduct" src={product.image2} alt={name} />
          <img className="sigle-priduct" src={product.image3} alt={name} />
          <img className="sigle-priduct" src={product.image4} alt={name} />
          <img className="sigle-priduct" src={product.image5} alt={name} />
          <img className="sigle-priduct" src={product.image6} alt={name} />
        </div> */}

        <div className="product-screen-info-container">
          <div className="info-title">
            <h3>{product.name}</h3>
            <div className="title-rating">
              <Rating value={product.rating} />
              <p>{`(${product.numReviews} Rewiews) | `} <span>{`${product.stock > 0 ? 'In stock' : 'Not have in Stock' } `}</span></p>
            <h3>{product.price}</h3>
              <p>{product.description}</p>
            </div>



            <button onClick={increment} ><ion-icon name="add-outline"></ion-icon></button>
            <div>{count}</div>
            <button onClick={decrement} ><ion-icon name="remove-outline"></ion-icon></button>

          </div>
        </div>
      </div>
      <Products />
      <Footer />
    </div>
  );
}

export default ProductScreen;
