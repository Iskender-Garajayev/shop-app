import React from "react";
import allDatas from "../../../datas/allDatas";
import Rating from "../todays/Products/Rating";
import { Link, useParams } from "react-router-dom";
import Header from "../../Header/Header";
import Footer from "../../footer/Footer";

const Category = () => {
  const { category } = useParams();
  allDatas.find((product) => product.category === category);
  const categories = allDatas.filter((c) => c.category === 'Electronics');

  return (
    <>
    <Header/>
    <div className="card-container">
      {categories.map((category) => (
      <div key={category.category} className="card">
        <Link to={`/product/${category._id}`}>
          <div className="img-container">
            <img src={category.image} alt="" />
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
          <Link to={`/product/${category._id}`}>
            <h3>{category.name}</h3>
          </Link>

          <div className="price-rating">
            <span className="price" >{category.price}</span>
            <Rating value={category.rating} />
            <span>({category.numReviews})</span>
          </div>
        </div>
      </div>
               ))}  
    </div>
    <Footer/>
    </>
  );
};

export default Category;
