import React, { useState } from "react";
import { Link } from "react-router-dom";
import Advertisement from "../components/Advertisement";
import CardProduct from "../components/CardProduct";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";

function Home(props) {
  const { products } = props;
  const productAds = products.slice(0, 3);
  return (
    <>
      <Navbar />
      <main className="main">
        <Advertisement />
        <div className="productAds-container container">
          <h1 className="text-center my-5">Store</h1>
          <div className="productAds d-md-flex justify-content-between flex-wrap">
            {productAds.map((product) => {
              return (
                <CardProduct
                  product={product}
                  imgSrc={product.imgSrc}
                  name={product.name}
                  price={product.price}
                  key={product.id}
                />
              );
            })}
          </div>
          <div className="view-more-btn d-flex justify-content-center align-items-center">
            <Link
              to="/store"
              className="my-5 py-3 px-3 rounded-1 text-center d-inline-flex justify-content-center align-items-center bg-dark text-light view-more"
            >
              See more
            </Link>
            {/* <button onClick={checkData}>View Data</button> */}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
