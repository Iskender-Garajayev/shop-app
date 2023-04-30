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
            <div className="img-container">
              <img src={data.image} alt="" />
            </div>
            <div className="card-title">
              <Link to={`/product/${data._id}`}>
                <h3>{data.name}</h3>
              </Link>

              <div className="price-rating">
                <span>{data.price}</span>
                <Rating value={data.rating} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
