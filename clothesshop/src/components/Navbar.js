import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.scss";
function Navbar() {
  const [menuBtn, setMenuBtn] = useState(true);

  const handleClick = () => {
    setMenuBtn(!menuBtn);
    if (menuBtn) {
      document.getElementById("sidebarMenu").style.transform = "translateX(0)";
      document.getElementById("sidebarMenu").style.opacity = "1";
    } else {
      document.getElementById("sidebarMenu").style.transform =
        "translateX(200%)";
      document.getElementById("sidebarMenu").style.opacity = "0";
    }
  };

  return (
    <>
      {/* Desktop menu */}
      <header className="header">
        <nav className="navigation-bar d-md-flex d-none">
        <div className="logo">
          <Link to="/">Diablo</Link>
        </div>

        <div id="desktopMenu">
          <ul>
            <li>
              <Link to="/store">Store</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          <ul>
            <li>
              <Link to="/cart">
                <i className="fa-solid fa-cart-shopping"></i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile menu */}
      <nav className="navigation-bar d-md-none d-flex">
        <div className="logo">
          <Link to="/">Diablo</Link>
        </div>

        <div className="nav-button d-flex align-items-center">
          
              <Link to="/cart">
                <i className="fa-solid fa-cart-shopping text-dark"></i>
              </Link>
            
              <i type="button" className="ti-menu px-3" onClick={handleClick}></i>
            
          
        </div>

        <div id="sidebarMenu">
          <ul className="px-2">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/store">Store</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
      </header>
      
    </>
  );
}

export default Navbar;
