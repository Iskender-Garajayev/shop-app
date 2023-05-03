import React from "react";
import data from "../../../../datas/data";
import { Link, useParams } from "react-router-dom";
import "./ProductScreen.css";
import Rating from "./Rating";
import Header from "../../../Header/Header";
import Footer from "../../../footer/Footer";
import Products from "./Products";

// import axios from "axios";

function ProductScreen({ match }) {
  const { id } = useParams();
  const product = data.find((product) => product._id === id);
  const { name } = product;

  return (
    <div>
      <Header />

      <div className="product-screen-container">
        <Link to="/">Go back</Link>
        <div className="image-container">
          <img className="sigle-priduct" src={product.image} alt={name} />
        </div>
        {/* <div>
          <img className="sigle-priduct" src={product.image2} alt={name} />
          <img className="sigle-priduct" src={product.image3} alt={name} />
          <img className="sigle-priduct" src={product.image4} alt={name} />
          <img className="sigle-priduct" src={product.image5} alt={name} />
          <img className="sigle-priduct" src={product.image6} alt={name} />
        </div> */}
        <h3>{product.price}</h3>
        <Rating value={product.rating} />
      </div>

      <Products />

      <Footer />
    </div>
  );
}

export default ProductScreen;
