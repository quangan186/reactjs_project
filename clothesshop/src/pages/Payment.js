import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Payment() {
    let navigate = useNavigate();
    const accept = (e) =>{
        e.preventDefault();
        navigate("/notification");
    }
    const cancel = (e) => {
        e.preventDefault();
        navigate("/");
    }
  return (
    <>
      <Navbar />
      <main className="main">
        <div className="container border my-5">
          <form className="form my-3 mx-3">
            <h1>Payment</h1>
            <div className="row name d-flex justify-content-between my-3">
              <div className="col-5 first-name">
                <label className="form-label fw-bold">First name: </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="E.g: An"
                  name="first_name"
                />
              </div>

              <div className="col-5 last-name">
                <label className="form-label fw-bold">Last name: </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="E.g: Bui"
                  name="last_name"
                />
              </div>
            </div>

            <div className="row contact d-flex justify-content-between my-3">
              <div className="col-5 email">
                <label className="form-label fw-bold">Email: </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="E.g: example@gmail.com"
                  name="email"
                />
              </div>

              <div className="col-5 last-name">
                <label className="form-label fw-bold">Phone number: </label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="E.g: 0123456789"
                  name="phone"
                />
              </div>
            </div>

            <div className="row address my-3">
              <div className="col-12">
                <label className="form-label fw-bold">Address: </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="E.g: 123 Huynh Van Banh, Phuong 13, Quan Phu Nhuan, Thanh Pho Ho Chi Minh"
                  name="address"
                />
              </div>
            </div>

            <div className="row payment-method my-3">
              <div className="col-12 d-flex">
                <label className="fw-bold">Payment method:</label>
                <div class="form-check mx-3">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="method"
                    id="cash"
                    checked
                    readOnly
                  />
                  <label class="form-check-label" htmlFor="cash">
                    Cash
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="method"
                    id="online"
                  />
                  <label class="form-check-label" htmlFor="online">
                    Bank account
                  </label>
                </div>
              </div>
            </div>

            <div className="row order my-3">
              <p className="fw-bold">Your order:</p>
              <div className="col-12">
                <p>Sunflower Cuban Shirt. Size 1 x3</p>
              </div>
            </div>

            <div className="row cost my-3">
              <div className="col-12 d-flex justify-content-between">
                <h5>Total: </h5>
                <h5>1257000 VND</h5>
              </div>
            </div>

            <div className="row choice">
              <div className="col-12 text-end">
                <button className="btn btn-danger mx-3" onClick={cancel}>Cancel</button>
                <button className="btn btn-dark" onClick={accept}>Accept</button>
              </div>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Payment;
