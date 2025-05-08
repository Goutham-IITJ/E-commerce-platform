import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Orders from "./pages/Orders";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import PlaceOrder from "./pages/PlaceOrder";
const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Navbar/>
      <Routes>
        <Route pathe="/" element={<Home />} />
        <Route pathe="/collection" element={<Collection />} />
        <Route pathe="/about" element={<About />} />
        <Route pathe="/contact" element={<Contact />} />
        <Route pathe="/product/:productId" element={<Product />} />
        <Route pathe="/cart" element={<Cart />} />
        <Route pathe="/login" element={<Login />} />
        <Route pathe="/place-order" element={<PlaceOrder />} />
        <Route pathe="/orders" element={<Orders />} />
      </Routes>
    </div>
  );
};

export default App;
