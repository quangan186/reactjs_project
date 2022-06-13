import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "../styles/Product.scss";
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function ProductDetails() {
  return (
    <>
      <Navbar />
      <main className="main">
        <div className="container my-5">
          <div className="row d-md-flex d-block">
            <div className="col-md-6 product-img">
              <img src="../images/scs.jpeg" alt="" />
            </div>
            <div className="col-md-6 my-md-0 my-5 product-info">
              <h3>Sunflower Cuban Shirt</h3>
              <h1 className="my-5">419000</h1>
              <div className="size my-5 d-flex flex-wrap">
                <button className="me-3 mb-3 size-btn">0</button>
                <button className="me-3 mb-3 size-btn">1</button>
                <button className="me-3 mb-3 size-btn">2</button>
                <button className="me-3 mb-3 size-btn">3</button>
              </div>

              <button className="w-100 add-to-cart"><FontAwesomeIcon icon={faCartShopping} className="mx-2"/> Add to cart</button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default ProductDetails;
