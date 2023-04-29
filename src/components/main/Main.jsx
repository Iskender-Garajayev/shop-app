import React from "react";
import Swiper from "./swiper/Swiper";
import "./Main.css";

const Main = () => {
  return (
    <div className="main-container">
      <div className="main-menu">
        <ul>
          <li> <span>Woman’s Fashion</span>  <ion-icon name="chevron-forward-outline"></ion-icon> </li>
          <li> <span>Men’s Fashion</span>  <ion-icon name="chevron-forward-outline"></ion-icon></li>
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
