import React, { useState } from "react"; 
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
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import List from "../../admin/src/pages/List";

const App = () => {
  const [token, setToken] = useState(null);

  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <ToastContainer />
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/admin/src/pages/List" element={<List token={token} />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
