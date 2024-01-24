import React from "react";
import "./Banner.css";
import heroImage from "../assets/heroimg.avif";

const Banner = () => {
  const scrollToItems = () => {
    window.scrollTo({ top: 800, behavior: "smooth" });
  };

  return (
    <div className="banner">
      <div className="banner-left">
        <h3>New arrival only</h3>
        <h1>
          <span>new</span>
          <span>collections</span>
          <span>for everyone</span>
        </h1>
        <button onClick={scrollToItems}>Explore &rarr;</button>
      </div>
      <div className="banner-right">
        <img src={heroImage} alt="" />
      </div>
    </div>
  );
};

export default Banner;
