import React from "react";
import Banner from "../components/Banner/Banner";
import PopularItems from "../components/PopularItems/PopularItems";
import BannerDiscount from "../components/BannerSpring/BannerSpring";
import SpringCollection from "../components/SpringCollection/SpringCollection";

const Home = () => {
  return (
    <div>
      <Banner />
      <PopularItems />
      <BannerDiscount />
      <SpringCollection />
    </div>
  );
};

export default Home;
