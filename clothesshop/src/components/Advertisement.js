import React, { useState } from "react";

function Advertisement() {
  const [ads, setAds] = useState([
    "../images/ads-1.png",
    "../images/ads-2.png",
    "../images/ads-3.png",
  ]);
  return (
      <div id="advertisement" className="carousel slide" data-bs-ride="true">
        <div className="carousel-indicators">
          {ads.map((imgSrc, index) => {
            if (index === 0) {
              return (
                <button
                  type="button"
                  data-bs-target="#advertisement"
                  data-bs-slide-to={index}
                  className="active"
                  aria-current="true"
                ></button>
              );
            }
            return (
              <button
                type="button"
                data-bs-target="#advertisement"
                data-bs-slide-to={index}
              ></button>
            );
          })}
        </div>

        <div className="carousel-inner">
          {ads.map((imgSrc, index) => {
            if (index === 0) {
              return (
                <div className="carousel-item active">
                  <img src={imgSrc} alt={index} className="d-block w-100" />
                </div>
              );
            }
            return (
              <div className="carousel-item">
                <img src={imgSrc} alt={index} className="d-block w-100" />
              </div>
            );
          })}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#advertisement"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#advertisement"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
  );
}

export default Advertisement;
