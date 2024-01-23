import React, { useContext } from "react";
import CartContext from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import "./Cart.css";
import Order from "../Order/Order";

const Cart = () => {
  const cartCtx = useContext(CartContext);

  const subtotalPrice = cartCtx.items.reduce((acc, item) => {
    return acc + item.new_price * item.quantity;
  }, 0);

  let shipping;

  if (subtotalPrice > 150) {
    shipping = 0;
  } else {
    shipping = 15;
  }

  const totalPrice = subtotalPrice + shipping;

  const clearCartHandler = () => {
    cartCtx.clearCart();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="cart">
      {cartCtx.items.length === 0 ? (
        <p className="cart-empty">Your cart is empty.</p>
      ) : (
        <div className="cart-field">
          <div className="cart-items">
            {cartCtx.items.map((item, i) => (
              <CartItem key={i} item={item} />
            ))}
          </div>
          <button className="cart-button" onClick={clearCartHandler}>
            Clear Cart
          </button>
          <div className="cart-order">
            <div className="cart-total">
              <h3>Total Price</h3>
              <p className="cart-subtotal-price">
                Subtotal: <br /> <strong>${subtotalPrice}</strong>
              </p>
              <p className="cart-shipping">
                Shipping: <br /> <strong>${shipping}</strong>
              </p>
              <p className="cart-total-price">
                Total: <br /> <strong>${totalPrice}</strong>
              </p>
              <p className="cart-shipping-detail">
                Shipping is <strong>free</strong> if your purchase is over{" "}
                <strong>$150</strong>.
              </p>
            </div>

            <Order />
          </div>
          <button className="cart-scroll" onClick={scrollToTop}>
            {" "}
            &uarr;
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
