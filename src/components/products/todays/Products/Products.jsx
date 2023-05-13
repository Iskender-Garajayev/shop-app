import React from "react";
import data from "../../../../datas/data";
import "./Product.css";
import Rating from "./Rating";
import { Link } from "react-router-dom";

const Products = () => {
  
  
  return (
    <>
      <div className="card-container">
        {data.map((data) => (
          <div key={data._id} className="card">
              <Link to={`/product/${data._id}`} >
            <div className="img-container">
              <img src={data.image} alt="" />
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
                <h3>{data.name}</h3>
              </Link>

              <div className="price-rating">
                <span className="price" >{data.price}</span>
                <Rating value={data.rating} />
                <span>({data.numReviews})  </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
