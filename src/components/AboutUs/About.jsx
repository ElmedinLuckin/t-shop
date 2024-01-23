import React from "react";
import aboutImg from "../assets/aboutusImg.webp";
import "./About.css";
import { Link } from "react-router-dom";

const About = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="about">
      <div className="about-one">
        <h1>About Us</h1>
        <p>
          Hello, we are T-Shop, a clothing company for all genders. We are
          located in New York at 188 New York Street. Working hours are from 8AM
          - 9PM. Come and visit us and convince yourself of our quality. You can
          also order online. Your T-Shop :)
        </p>
        <Link to="/">
          <button onClick={scrollToTop}>Start Shopping</button>
        </Link>
        <h3>created by Elmedin Lučkin.</h3>
      </div>
      <div className="about-two">
        <img src={aboutImg} alt="" />
      </div>
    </section>
  );
};

export default About;
