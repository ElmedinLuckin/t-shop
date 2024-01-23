import React from "react";
import "./SpringCollection.css";
import springCollection from "../assets/springCollections";
import Item from "../Item/Item";

const SpringCollection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const springCollectionItems = springCollection.map((item, i) => {
    return <Item key={i} id={item.id} item={item} />;
  });

  return (
    <div className="spring-collection">
      <h2>
        Spring Collection <hr />{" "}
      </h2>
      <div onClick={scrollToTop} className="spring-collection-items">
        {springCollectionItems}
      </div>
    </div>
  );
};

export default SpringCollection;
