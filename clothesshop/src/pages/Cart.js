import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/Cart.scss"
function Cart() {
  return (
    <>
      <Navbar />
      <main className="main">
        <div className="container">
          <table class="table my-3 text-center">
            <thead>
              <tr>
                <th scope="col">Order</th>
                <th scope="col">Item</th>
                <th scope="col">Size</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Sunflower Cuban Shirt</td>
                <td>1</td>
                <td>1</td>
                <td>419000</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Sunflower Cuban Shirt</td>
                <td>1</td>
                <td>1</td>
                <td>419000</td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>Sunflower Cuban Shirt</td>
                <td>1</td>
                <td>1</td>
                <td>419000</td>
              </tr>
            </tbody>
          </table>
          <div className="total d-flex justify-content-between my-3">
            <h5>Total:</h5>
            <h5>1257000 VND</h5>
          </div>
          <div className="payment text-end">
            <Link to="/payment" className="mb-3 payment-btn btn btn-dark d-inline-flex align-items-center justify-content-center">Payment</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Cart;
