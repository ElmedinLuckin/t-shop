import React, { useContext, useRef, useState } from "react";
import "./Order.css";
import CartContext from "../../context/CartContext";

const Order = () => {
  const cartCtx = useContext(CartContext);

  const fullnameRef = useRef();
  const numberRef = useRef();
  const emailRef = useRef();
  const cityRef = useRef();
  const streetRef = useRef();

  const submitOrderForm = async (event) => {
    event.preventDefault();

    const orderData = {
      fullname: fullnameRef.current.value,
      number: numberRef.current.value,
      email: emailRef.current.value,
      city: cityRef.current.value,
      street: streetRef.current.value,
    };

    if (
      orderData.fullname.trim() === "" ||
      orderData.number.trim() === "" ||
      orderData.email.trim() === "" ||
      orderData.city.trim() === "" ||
      orderData.street.trim() === ""
    ) {
      return;
    }

    try {
      const response = await fetch(
        "https://t-shop-6a01d-default-rtdb.firebaseio.com/orders.json",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            orders: cartCtx.items,
            customer: orderData,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Error submitting order");
      }
    } catch (error) {
      console.error("Error submitting order:", error.message);
    }

    /*fullnameRef.current.value = "";
    numberRef.current.value = "";
    emailRef.current.value = "";
    cityRef.current.value = "";
    streetRef.current.value = "";*/

    cartCtx.clearCart();
  };

  return (
    <div className="order">
      <form onSubmit={submitOrderForm}>
        <h2>Please complete your order</h2>

        <label htmlFor="fullname">Fullname:</label>
        <input
          ref={fullnameRef}
          type="text"
          name="fullname"
          id="fullname"
          required
          placeholder="Enter your full name"
        />
        <label htmlFor="number">Phone Number:</label>
        <input
          ref={numberRef}
          type="number"
          name="number"
          id="number"
          required
          placeholder="Enter your phone number"
        />
        <label htmlFor="email">E-mail:</label>
        <input
          ref={emailRef}
          type="email"
          name="email"
          id="email"
          required
          placeholder="Enter your e-mail"
        />

        <label htmlFor="city">City:</label>
        <input
          ref={cityRef}
          type="text"
          name="city"
          id="city"
          required
          placeholder="Enter your city"
        />
        <label htmlFor="street">Street:</label>
        <input
          ref={streetRef}
          type="text"
          name="street"
          id="street"
          required
          placeholder="Enter your street name"
        />

        <button>Order now</button>
      </form>
    </div>
  );
};

export default Order;
