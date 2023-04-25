// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Iphone from '../../../img/iphone.png'
import AppleLogo from '../../../img/1200px-Apple_gray_logo 1.png'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import './swiper.css'

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="item1">
          <div className="sw-title">
            <div className="title-logo">
              <img src={AppleLogo} alt="Apple Logo" />
              <p>iPhone 14 Series</p>
            </div>
            <p className="sub-title">Up to 10% off Voucher</p>
            <p>Shop Now  <ArrowForwardIcon className="sw-icon"/></p>
            
            <div>
            </div>
          </div>
          <div className="sw-img">
            <img src={Iphone} alt="Iphone" />
          </div>
        </div>
        </SwiperSlide>
        
        <SwiperSlide>
        <div className="item1">
          <div className="sw-title">
            <div className="title-logo">
              <img src={AppleLogo} alt="Apple Logo" />
              <p>iPhone 14 Series</p>
            </div>
            <p className="sub-title">Up to 10% off Voucher</p>
            <p>Shop Now  <ArrowForwardIcon className="sw-icon"/></p>
            
            <div>
            </div>
          </div>
          <div className="sw-img">
            <img src={Iphone} alt="Iphone" />
          </div>
        </div>
        </SwiperSlide>
        {/* <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  );
}
