import { Swiper, SwiperSlide } from "swiper/react";
import Iphone from '../../../img/iphone.png'
import AppleLogo from '../../../img/appleLogo.png'
import PsConsole from '../../../img/ps5-slim.png'
import PsLogo from '../../../img/ps5Logo.png'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import "swiper/css";
import "swiper/css/pagination";
import './swiper.css'
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
              <img className="PsConsole" src={PsLogo} alt="Ps5 Logo" />
              {/* <p>iPhone 14 Series</p> */}
            </div>
            <p className="slg-sub-title"> <p className="Ps-sub-title">Play</p>  Has No Limits</p>
            <p>Shop Now  <ArrowForwardIcon className="sw-icon"/></p>
            
            <div>
            </div>
          </div>
          <div className="sw-img">
            <img className="PcConsole" src={PsConsole} alt="Iphone" />
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
