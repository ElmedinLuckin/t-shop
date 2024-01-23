import React, { useEffect } from "react";
import Item from "../components/Item/Item";
import "./ItemCategory.css";
import { useData } from "../context/itemContext";

const ItemCategory = ({ category }) => {
  const { items, fetchData } = useData();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  console.log(items);

  return (
    <div className="item-category">
      <h2>
        {category} <hr />{" "}
      </h2>

      <ul>
        {Object.values(items).map((item, i) => {
          if (item.category === category) {
            return (
              <li key={i}>
                {" "}
                <Item id={item.id} item={item} />
              </li>
            );
          }
          return null;
        })}
      </ul>
    </div>
  );
};

export default ItemCategory;
