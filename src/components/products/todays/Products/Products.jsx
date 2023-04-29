import React from "react";
import data from "../../../../datas/data";
import "./Product.css";

const Products = () => {
  return (
    <>
      <div className="card-container">
        {data.map((data) => (
          <div className="card">
            <div className="img-container">
              <img src={data.image} alt="" />
            </div>
            <div className="card-title">
              <h3>{data.name}</h3>
              <span>{data.price}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
