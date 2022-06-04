import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.scss"
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-md bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Diablo
          </Link>

          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/store" className="nav-link">
                Store
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>

          <ul className="navbar-nav">
            <li className="nav-item">
                <Link to="/login" className="nav-link">Login</Link>
            </li>
            <li className="nav-item">
                <Link to="/register" className="nav-link">Register</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
