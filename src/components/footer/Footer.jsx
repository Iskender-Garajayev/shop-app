import React from "react";
import "./Footer.css";
import SendIcon from "@mui/icons-material/Send";
import QRCode from "../../img/Qrcode 1.png";
import GooglePlay from "../../img/google-pkay.png";
import AppStore from "../../img/download-appstore.png";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-title">
        <div>
          <ul>
            <h3 className="footer-logo">exclusive</h3>
            <li className="subscribe">Subscribe</li>
            <li>Get 10% off your first order</li>
            <li>
              <form action="" className="input">
                <input type="text" placeholder="Enter your email" />
                <SendIcon className="send-icon" />
              </form>
            </li>
          </ul>
        </div>

        <div>
          <div className="title">Support</div>
          <ul className="title-container">
            <li>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</li>
            <li>exclusive@gmail.com</li>
            <li>+88015-88888-9999</li>
          </ul>
        </div>

        <div>
          <div className="title">Account</div>
          <ul className="title-container">
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

        <div>
          <div className="title">Quick Link</div>
          <ul className="title-container">
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <div className="dowload-title">Download App</div>
          <div className="dowload-title-container">
            <div className="text">Save $3 with App New User Only</div>
            <div className="img">
              <img src={QRCode} alt="" />
              <div className="dowload-app">
                <img src={GooglePlay} alt="Google play" />
                <img src={AppStore} alt="App Storey" />
              </div>
            </div>
            <div className="icons-container">
              <FacebookRoundedIcon />
              <InstagramIcon />
              <LinkedInIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
