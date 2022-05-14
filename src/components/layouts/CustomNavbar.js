import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Colors } from "../../utils/Colors";
// import ProgressBar from "../ProgressBar";

export default function CustomNavbar() {
  const [show, setShow] = useState(false);
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light home-border-radius sticky-top"
        style={{ backgroundColor: Colors.Background }}
      >
        <div className="container">
          <Link
            className="navbar-brand nav-font"
            to="/"
          >
            <span className="text-orange">U</span>
            <span style={{ color: Colors.LightBlue }}>WO</span>
            <span className="text-white"> Influencers</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShow(!show)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${show ? "show" : ""}`}>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link mx-3 text-white font-44"
                  to="/about"
                  style={{ fontFamily: "Gilroy_Medium" }}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
              <Link
                  className="nav-link mx-3 text-white font-44"
                  style={{ fontFamily: "Gilroy_Medium" }}
                  to="/OurOfferings"
                >
                  Our Offerings
                  {/* <div class="dropdown-content">
                    <Link to="/InfluencerMarketing" className="zoom-text">Influencer Marketing</Link>
                    <Link to="/ProductPramotions" className="zoom-text">Product Pramotions</Link>
                    <Link to="/BrandPramotions" className="zoom-text">Brand Pramotions</Link>
                    <Link to="/VideoAdvertisement" className="zoom-text">Video Advertisement</Link>
                    <Link to="/Giveaway" className="zoom-text">Giveaway Campaigns</Link>
                    <Link to="/MemeMarketing" className="zoom-text">Meme Marketing</Link>
                  </div> */}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link mx-3 text-white font-44"
                  to="/ourinfluencer"
                  style={{ fontFamily: "Gilroy_Medium" }}
                >
                  Our Influencer
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link mx-3 text-white font-44"
                  to="/OurWorkMain"
                  style={{ fontFamily: "Gilroy_Medium" }}
                >
                  Our Works
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link mx-3 text-white font-44"
                  to="/getintouch"
                  style={{ fontFamily: "Gilroy_Medium" }}
                >
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
