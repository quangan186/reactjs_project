import "./App.css";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import ProductDetails from "./components/ProductDetails";
function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Sunflower Cuban Shirt",
      price: 419000,
      size: [0, 1, 2, 3],
      imgSrc: "../images/scs.jpeg"
    },
    {
      id: 2,
      name: "Venice Collar Shirt",
      price: 449000,
      size: [0, 1, 2, 3],
      imgSrc: "../images/vcs.jpeg"
    },
    {
      id: 3,
      name: "Sss Mix Tee",
      price: 209300,
      size: [0, 1, 2, 3],
      imgSrc: "../images/smt.jpeg"
    },
    {
      id: 4,
      name: "Hide Pants",
      price: 399000,
      size: [0, 1, 2, 3],
      imgSrc: "../images/hp.jpeg"
    },
    {
      id: 5,
      name: "Bird Shirt 2022",
      price: 349000,
      size: ["F"],
      imgSrc: "../images/bs.jpeg"
    },
    {
      id: 6,
      name: "Paris Shirt",
      price: 349000,
      size: ["F"],
      imgSrc: "../images/ps.jpeg"
    },
    {
      id: 7,
      name: "Jubilee Dress",
      price: 349500,
      size: [0, 1, 2],
      imgSrc: "../images/jd.jpeg"
    },

    {
      id: 8,
      name: "Layer Skirt",
      price: 199500,
      size: [0, 1, 2],
      imgSrc: "../images/ls.jpeg"
    },
  ])

  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home products={products}/>} />
            <Route path="/" element={<Home products={products}/>} />
            <Route path="/store" element={<Store products={products} />} />
            <Route path="/product" element={<ProductDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
