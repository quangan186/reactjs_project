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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>

          <div className="about-us my-5 ">
            <h1 className="text-center my-3">About us</h1>

            <div className="profile d-md-flex  border">
              <div className="profile-img w-100 px-auto text-center border-end">
                <img src="../images/ava.JPG" alt="ava" className="my-3"/>
                <h3>Bui Quang An</h3>
                <p>Web developer, game developer</p>
              </div>

              <div className="profile-info w-100">
                <ul className="navbar-nav my-3 px-5">
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
