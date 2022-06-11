import React from "react";
import Navbar from "../components/Navbar";
import { useForm } from "react-hook-form";
import "../styles/Contact.scss"
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookSquare} from '@fortawesome/free-brands-svg-icons'
import {faEnvelopeSquare, faPhoneSquare} from '@fortawesome/free-solid-svg-icons'
function Contact() {
  return (
    <>
    <Navbar /> 
      <div className="container my-5">
        <div className="d-md-flex justify-content-between border">
          <form className="contact-form w-100 py-3 px-5 my-md-0 my-5">
            <h1 className="fs-3">Contact us</h1>
            <p>Send us your question or feedback by filling out this form or contact us through our social and mobile phone</p>
            <div>
              <label className="px-0 form-label fw-bold">Fullname:</label>
              <input className="my-2 form-control" type="text" name="name" placeholder="Enter your fullname"/>
            </div>

            <div>
              <label className="px-0 form-label fw-bold">Email:</label>
              <input className="my-2 form-control" type="email" name="email" placeholder="Enter your email"/>
            </div>

            <div>
              <label className="px-0 form-label fw-bold">Phone number:</label>
              <input className="my-2 form-control" type="number" name="phone" placeholder="Enter your phone number"/>
            </div>

            <div>
              <label className="px-0 form-label fw-bold">Message:</label>
              <textarea className="my-2 form-control" type="text" name="message" placeholder="Enter your message"></textarea>
            </div>

            <div className="float-end">
              <button className="my-3 btn btn-dark">Send</button>
            </div>
            </form>
          <div className="contatct-info w-100 px-5 border-start py-3">
            <h1 className="fs-3 pb-5 border-bottom">Contact information</h1>
            <ul className="navbar-nav py-5">
              <li className="nav-item pb-5"><a href="https://www.facebook.com/profile.php?id=100013348872340" rel="noreferrer" target="_blank" className="nav-link"><FontAwesomeIcon icon={faFacebookSquare} className="me-2"/>An Bui</a></li>
              <li className="nav-item pb-5"><FontAwesomeIcon icon={faEnvelopeSquare} className="me-2"/> quangan186@gmail.com</li>
              <li className="nav-item pb-5"><FontAwesomeIcon icon={faPhoneSquare} className="me-2"/>+84 773939468</li>
            </ul>
          </div>
        </div>
        </div>
      <Footer />
    </>
    
  );
}

export default Contact;
