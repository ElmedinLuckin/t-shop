import React from "react";
import "./PopularItems.css";
import popularStuffs from "../assets/popularStuff";
import PopularArticle from "../PopularArticle/PopularArticle";

const PopularItems = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const popularItems = popularStuffs.map((item, i) => {
    return <PopularArticle key={i} id={item.id} item={item} />;
  });

  return (
    <div className="popular-items">
      <h2>
        Popular <hr />{" "}
      </h2>
      <div onClick={scrollToTop} className=" popular-items-stuffs">
        {popularItems}
      </div>
    </div>
  );
};

export default PopularItems;
