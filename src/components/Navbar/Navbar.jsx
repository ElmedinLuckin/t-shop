import logo from "../assets/logo.jpg";
import carticon from "../assets/carticon.jpg";
import "./Navbar.css";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../context/CartContext";

const Navbar = () => {
  const [list, setList] = useState("home");

  const cartCtx = useContext(CartContext);

  const numberItemsInCart = cartCtx.items.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  return (
    <div className="navbar">
      <div>
        <div className="navbar-logo">
          <img src={logo} alt="" />
          <p>T-Shop</p>
        </div>
      </div>
      <div className="navbar-down">
        <div className="navbar-menu">
          <ul>
            <li
              onClick={() => {
                setList("home");
              }}
            >
              <Link to="/">Home</Link> {list === "home" ? <hr /> : null}
            </li>
            <li
              onClick={() => {
                setList("mens");
              }}
            >
              <Link to="/mens">Mens</Link> {list === "mens" ? <hr /> : null}
            </li>
            <li
              onClick={() => {
                setList("womens");
              }}
            >
              <Link to="/womens">Womens</Link>{" "}
              {list === "womens" ? <hr /> : null}
            </li>
            <li
              onClick={() => {
                setList("kids");
              }}
            >
              <Link to="/kids">Kids</Link> {list === "kids" ? <hr /> : null}
            </li>
          </ul>
        </div>
        <div className="navbar-options">
          <Link to="/cart">
            {" "}
            <img src={carticon} alt="" />
          </Link>
          <div className="navbar-count">{numberItemsInCart}</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

/*    <Link to="/loginregister">
            <button>Login</button>
          </Link>*/
