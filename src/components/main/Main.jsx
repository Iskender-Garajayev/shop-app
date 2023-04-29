import React from "react";
import Swiper from "./swiper/Swiper";
import "./Main.css";

const Main = () => {
  return (
    <div className="main-container">
      <div className="main-menu">
        <ul>
          <li>Woman’s Fashion</li>
          <li>Men’s Fashion</li>
          <li>Electronics</li>
          <li>Home & Lifestyle</li>
          <li>Medicine</li>
          <li>Sports & Outdoor</li>
          <li>Baby’s & Toys</li>
          <li>Groceries & Pets</li>
          <li>Health & Beauty</li>
        </ul>
      </div>
      <div className="main-swiper">
        <Swiper />
      </div>
    </div>
  );
};

export default Main;
