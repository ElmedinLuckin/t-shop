import { createContext, useContext, useState } from "react";

const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://t-shop-6a01d-default-rtdb.firebaseio.com/.json"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();

      setItems(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  console.log(items);
  return (
    <ItemContext.Provider value={{ items, fetchData }}>
      {children}
    </ItemContext.Provider>
  );
};

export const useData = () => {
  return useContext(ItemContext);
};
