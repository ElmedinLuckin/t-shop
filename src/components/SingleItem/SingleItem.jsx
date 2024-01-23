import { useContext, useState } from "react";
import "./SingleItem.css";
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";

const SingleItem = ({ item }) => {
  const [selectedSize, setSelectedSize] = useState("");

  const cartCtx = useContext(CartContext);

  if (!item) {
    return <p>Loading...</p>;
  }

  const cartItem = { ...item, size: selectedSize };

  const addItemToCart = (cartItem) => {
    cartCtx.addItem(cartItem);
  };

  return (
    <div className="single-item">
      <div>
        <h2>{item.name}</h2>
        <p className="single-item-flow">{`${item.category} > ${item.name}`}</p>
        <img src={item.image} alt="" />
      </div>
      <div className="single-item-details">
        <p className="single-item-description">{item.description}</p>
        <div className="single-item-prices">
          <p className="single-item-old">${item.old_price}</p>
          <p className="single-item-new">${item.new_price}</p>
        </div>

        <select
          onChange={(e) => {
            setSelectedSize(e.target.value);
          }}
          name="Choose Size"
          id="size"
          value={selectedSize}
          required
        >
          <option value="" disabled selected>
            Choose your size
          </option>
          <option value="s">S</option>
          <option value="m">M</option>
          <option value="l">L</option>
          <option value="xl">XL</option>
        </select>
        <Link to="/cart">
          <button onClick={() => addItemToCart(cartItem)}>Add to cart</button>
        </Link>

        <div className="single-item-about">
          <p>
            {" "}
            <strong>Category:</strong> {item.category}
          </p>
          <p>
            {" "}
            <strong>Material:</strong> {item.material}
          </p>
          <p>
            <strong> Care:</strong>

            {item.wash}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleItem;
