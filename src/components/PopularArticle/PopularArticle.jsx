import React from "react";
import "./PopularArticle.css";
import { Link } from "react-router-dom";

const PopularArticle = ({ item }) => {
  return (
    <div className="article">
      <Link to={`/item/${item.id}`}>
        <img src={item.image} alt="" />
      </Link>
      <h5>{item.name}</h5>
      <div className="article-prices">
        <p className="article-prices-old">${item.old_price}</p>
        <p className="article-prices-new">${item.new_price}</p>
      </div>
    </div>
  );
};

export default PopularArticle;
