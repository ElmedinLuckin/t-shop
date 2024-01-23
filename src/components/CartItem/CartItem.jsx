import React, { useContext } from "react";
import "./CartItem.css";
import CartContext from "../../context/CartContext";

const CartItem = ({ item }) => {
  const cartCtx = useContext(CartContext);

  /*const totalPrice = cartCtx.items.reduce((acc, item) => {
    return acc + item.quantity * item.new_price;
  }, 0);*/

  const removeItemHandler = (item) => {
    cartCtx.removeItem(item);
  };

  const itemPrice = item.new_price * item.quantity;

  return (
    <div className="cart-item">
      <img src={item.image} alt="" />
      <p className="cart-item-name">{item.name}</p>
      <p className="cart-item-size">{item.size}</p>
      <div className="cart-item-numbers">
        <p className="cart-item-quantity">x{item.quantity}</p>
        <p className="cart-item-price">${itemPrice}</p>
      </div>
      <p className="cart-item-remove" onClick={() => removeItemHandler(item)}>
        &#10005;
      </p>
    </div>
  );
};

export default CartItem;
