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
                <SendIcon/>
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
