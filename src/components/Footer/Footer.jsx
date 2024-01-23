import React from "react";
import "./Footer.css";
import logo from "../assets/logo.jpg";
import facebookIcon from "../assets/facebookIcon.png";
import instagramicon from "../assets/instagramIcon.png";
import pinterestIcon from "../assets/pinterestIcon.png";
import twitterIcon from "../assets/twitterIcon.png";

import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={logo} alt="" />
        <p>T-Shop</p>
      </div>
      <div className="footer-list">
        <ul>
          <Link to="/">
            <li onClick={scrollToTop}>Home</li>
          </Link>
          <Link to="/aboutus">
            <li onClick={scrollToTop}>About Us</li>
          </Link>

          <Link to="/contactus">
            <li>Contact Us</li>
          </Link>
        </ul>
      </div>
      <div className="footer-icons">
        <img src={facebookIcon} alt="" />
        <img src={instagramicon} alt="" />
        <img src={pinterestIcon} alt="" />
        <img src={twitterIcon} alt="" />
      </div>

      <p className="footer-copyright">Copyright @ 2024 - All Right Reserved.</p>
    </footer>
  );
};

export default Footer;
