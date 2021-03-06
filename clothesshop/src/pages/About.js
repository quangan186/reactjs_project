import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/About.scss"
function About() {
  return (
    <>
      <Navbar />
      <main className="main">
        <div className="container">
          <div className="about-web my-5">
            <h1 className="text-center my-3 logo">Diablo</h1>
            <p>
            Diablo’s business concept is to offer fashion and quality at the best price in a sustainable way. Diablo has since it was founded in 1947 grown into one of the world’s leading fashion companies. The content of this site is copyright-protected and is the property of Diablo organization.
            </p>
          </div>

          <div className="about-us my-5 ">
            <h1 className="text-center my-3">About us</h1>

            <div className="profile d-md-flex  border">
              <div className="profile-img w-100 px-auto text-center border-end py-5">
                <img src="../images/ava.JPG" alt="ava"/>
                <h3 className="text-white my-3">Bui Quang An</h3>
                <p className="text-white">Web developer, game developer</p>
              </div>

              <div className="profile-info w-100">
                <ul className="navbar-nav py-5 px-5 text-white">
                  <li className="nav-item pb-3">
                    <span className="fw-bold">Full name: </span>Bui Quang An
                  </li>

                  <li className="nav-item pb-3">
                    <span className="fw-bold">Birthdate: </span>18-06-2002
                  </li>

                  <li className="nav-item pb-3">
                    <span className="fw-bold">Gender: </span>Male
                  </li>

                  <li className="nav-item pb-3">
                    <span className="fw-bold ">Education: </span>
                    <div class="sub-info">
                      <ul className="mt-3">
                        <li className="my-3">
                          Graduated from Nguyen Thi Minh Khai High School in
                          2020
                        </li>
                        <li>Sophomore at RMIT University</li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default About;
