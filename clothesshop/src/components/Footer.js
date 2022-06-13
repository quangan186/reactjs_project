import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.scss"
function Footer() {
  return (
    <footer className="footer">
      <div className="container-fluid px-3 d-md-flex">
        <div className="about px-md-4 py-3 border-bottom border-dark border-opacity-25">
          <h1 className='logo fs-1 pt-2'>Diablo</h1>
          <p className="text-break">
            Diablo’s business concept is to offer fashion and quality at the best price in a sustainable way. Diablo has since it was founded in 1947 grown into one of the world’s leading fashion companies. The content of this site is copyright-protected and is the property of Diablo organization.
          </p>
        </div>
        <div className="location px-md-4 py-3 border-bottom border-dark border-opacity-25">
          <h1 className="d-md-inline-flex align-items-end fs-5">Location</h1>
          <p className="text-break">
            HCM: 123 Huynh Van Banh st, Ward 13, Phu Nhuan District
          </p>

          <h1 className="d-md-inline-flex align-items-end fs-5">Transfer</h1>
          <p className="text-break">
            Vietcombank: 4129 7506 2713 0105
          </p>
          <p className="text-break">
            Momo: 0773939468
          </p>
        </div>
        <div className="support px-md-4 py-3 border-bottom border-dark border-opacity-25">
          <h1 className="d-md-inline-flex align-items-end fs-5">Support</h1>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                FAQ
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/" className="nav-link">
                Forum
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/" className="nav-link">
                Help
              </Link>
            </li>
          </ul>
        </div>

        <div className="open-time px-md-4 py-3 border-bottom border-dark border-opacity-25">
          <h1 className="d-md-inline-flex align-items-end fs-5">Opening Hours</h1>
          <ul className="navbar-nav">
            <li className="nav-item">Monday: 09:00 AM - 10:00PM</li>

            <li className="nav-item">Tuesday: 09:00 AM - 10:00PM</li>

            <li className="nav-item">Wednesday: 09:00 AM - 10:00PM</li>

            <li className="nav-item">Thursday: 09:00 AM - 10:00PM</li>

            <li className="nav-item">Friday: 09:00 AM - 10:00PM</li>

            <li className="nav-item">Saturday: 10:00 AM - 9:00PM</li>

            <li className="nav-item">Sunday: 12:00 PM - 19:00PM</li>
          </ul>
        </div>
      </div>

      <div className="container-fluid d-flex justify-content-between align-items-center py-2 px-3">
        <h3 className="fs-6 my-0">All Right Reserved. © 2022 Diablo Clothes Shop.</h3>
        <div className="useful-link">
          <ul className="navbar-nav flex-row">
            <li className="nav-item">
              <Link to="/" className="nav-link ms-4">Copyright</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link ms-4">Privacy Policy</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link me-0 ms-4">Terms of Service</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
