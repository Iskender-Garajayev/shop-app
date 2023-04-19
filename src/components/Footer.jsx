import React from "react";
import "./Footer.css";
import SendIcon from '@mui/icons-material/Send';

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
                <SendIcon className="send-icon"/>
              </form>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li className="title">Support</li>
            <li>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</li>
            <li>exclusive@gmail.com</li>
            <li>+88015-88888-9999</li>
            
          </ul>
        </div>

        <div>
          <ul>
            <li>exclusive</li>
            <li>Subscribe</li>
            <li>Get 10% off your first order</li>
            <li>
              <form action="" className="input">
                <input type="text" />
                icon
              </form>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li>exclusive</li>
            <li>Subscribe</li>
            <li>Get 10% off your first order</li>
            <li>
              <form action="" className="input">
                <input type="text" />
                icon
              </form>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li>exclusive</li>
            <li>Subscribe</li>
            <li>Get 10% off your first order</li>
            <li>
              <form action="" className="input">
                <input type="text" />
                icon
              </form>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
