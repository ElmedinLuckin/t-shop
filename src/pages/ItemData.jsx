import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useData } from "../context/itemContext";
import SingleItem from "../components/SingleItem/SingleItem";
import popularStuffs from "../components/assets/popularStuff";
import springColections from "../components/assets/springCollections";
import "./ItemData.css";

const ItemData = () => {
  const { items, fetchData } = useData();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const all_items = Object.values(items).concat(
    popularStuffs,
    springColections
  );

  const { itemId } = useParams();
  const item = all_items.find((i) => i.id === Number(itemId));

  return (
    <div className="item-data">
      <SingleItem item={item} />
    </div>
  );
};

export default ItemData;
