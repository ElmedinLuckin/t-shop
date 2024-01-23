import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 150, behavior: "smooth" });
  };

  return (
    <div onClick={scrollToTop} className="item">
      <Link to={`/item/${item.id}`}>
        <img src={item.image} alt="" />
      </Link>
      <h5>{item.name}</h5>
      <div className="item-prices">
        <p className="item-prices-old">${item.old_price}</p>
        <p className="item-prices-new">${item.new_price}</p>
      </div>
    </div>
  );
};

export default Item;
