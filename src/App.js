import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ItemCategory from "./pages/ItemCategory";
import Item from "./pages/ItemData";
import CartPage from "./pages/CartPage";
import LoginRegister from "./pages/LoginRegister";
import Footer from "./components/Footer/Footer";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mens" element={<ItemCategory category="men" />} />
          <Route path="/womens" element={<ItemCategory category="women" />} />
          <Route path="/kids" element={<ItemCategory category="kids" />} />
          <Route path="/item" element={<Item />}>
            <Route path=":itemId" element={<Item />} />
          </Route>
          <Route path="/cart" element={<CartPage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

/*<Route path="/loginregister" element={<LoginRegister />} />*/
