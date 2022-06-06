import React from "react";
import { Link } from "react-router-dom";
import CardProduct from "./CardProduct";
import "../styles/ProductList.scss"
function ProductList() {
  return (
    <div className="products-container">
      <h1 className="text-center my-5">Products</h1>
      <div className="products-list d-flex justify-content-evenly flex-wrap">
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </div>
      <div className="view-more-btn d-flex justify-content-center align-items-center">
        <Link to="/store" className="my-5 py-3 px-3 rounded-1 text-center d-inline-flex justify-content-center align-items-center bg-dark text-light view-more">
            See more
        </Link> 
      </div>
      
    </div>
  );
}

export default ProductList;
