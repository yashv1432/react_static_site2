import { borderRadius, fontFamily, fontSize } from "@mui/system";
import React from "react";
import { Colors } from "../../utils/Colors";
import emoj1 from "../../img/heart1.png";
import emoj2 from "../../img/Vector2.png";
import VisitorCount from "../VisitorCount";
const Footer = () => {
  return (
    <>
      {/* //Remove the container if you want to extend the Footer to full width.  */}
      <div className="container px-0 cont_footer">
        {/* Footer  */}
        <footer
          className="text-center text-lg-start text-white YellowGradient footer_boder"
          // style={{backgroundColor: "#929fba"}}
        >
          {/* Grid container  */}
          <div className="container p-4 pb-0">
            {/* Section: Links  */}
            <section className="">
              {/*Grid row */}
              <div className="row">
                {/* Grid column  */}
                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className=" mb-4 about_font">About Us</h6>
                  <p style={{ color: "#102754", fontFamily: "Gilroy_Medium" }}>
                    "Lorem ipsum dolor sit amet, <br/>consectetur adipiscing elit,<br/>
                    sed do eiusmod tempor <br/>incididunt ut labore et <br/>dolore magna
                    aliqua. Ut <br/>enim ad minim veniam, quis.
                  </p>
                </div>
                {/* Grid column  */}

                <hr className="w-100 clearfix d-md-none" />

                {/* Grid column  */}
                <div className="col-md-2 col-lg-2 col-xl-3 mx-auto mt-3">
                  <h6
                    className=" mb-4 tittle_footer"
                    style={{ fontFamily: "Gilroy_Extra_Bold" }}
                  >
                    Quick Links
                  </h6>
                  <p>
                    <a className="btn-footer">About Us</a>
                  </p>
                  <p>
                    <a className="btn-footer">Our Influencers</a>
                  </p>
                  <p>
                    <a className="btn-footer">Our Work</a>
                  </p>
                  <p>
                    <a className="btn-footer"> Get in Touch</a>
                  </p>
                </div>
                {/* Grid column  */}

                <hr className="w-100 clearfix d-md-none" />

                {/* Grid column  */}
                <hr className="w-100 clearfix d-md-none" />

                {/* Grid column  */}
                <div className="col-md-4 col-lg-2 col-xl-3 mx-auto mt-3">
                  <h6
                    className=" mb-4 tittle_footer"
                    style={{ fontFamily: "Gilroy_Extra_Bold" }}
                  >
                    Company
                  </h6>
                  <p>
                    <a
                      className="btn-footer"
                      href="https://play.google.com/store/apps/details?id=com.uwo.entertainments&hl=en_IN&gl=US"
                    >
                      UWO Video
                    </a>
                  </p>
                  <p>
                    <a href="https://uwokart.com/" className="btn-footer">
                      UWO Kart
                    </a>
                  </p>
                  <p>
                    <a className="btn-footer">Privacy Policy</a>
                  </p>
                </div>
                {/* Grid column  */}

                {/* Grid column  */}
                <div className="col-md-3 col-lg-2 col-xl-3 mx-auto mt-3">
                  <h6
                    className=" mb-4 tittle_footer"
                    style={{ fontFamily: "Gilroy_Extra_Bold" }}
                  >
                    Contact
                  </h6>
                  <p>
                    <a
                      href="mailto:collaboration@theuwo.com"
                      className="btn-footer"
                    >
                      Email: collaboration@theuwo.com
                    </a>
                  </p>
                  <p>
                    <a href="tel:+91 9479672015" className="btn-footer">
                      Phone: +91 9479672015
                    </a>
                  </p>
                  <p
                    style={{ fontFamily: "Gilroy-SemiBold", color: "#453CC9" }}
                  >
                    Follow Us on:
                  </p>

                  {/* Facebook  */}
                  <a
                    className="btn btn-primary btn-floating m-1"
                    style={{ backgroundColor: " #3b5998" , borderRadius:"2vw", border:"none"}}
                    href="#!"
                    role="button"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>

                  {/* Twitter  */}
                  <a
                    className="btn btn-primary btn-floating m-1"
                    style={{ backgroundColor: " #55acee" , borderRadius:"2vw", border:"none"}}
                    href="#!"
                    role="button"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>

                  {/* Google  */}
                  <a
                    className="btn btn-primary btn-floating m-1"
                    style={{ backgroundColor: " #dd4b39" , borderRadius:"2vw", border:"none"}}
                    href="#!"
                    role="button"
                  >
                    <i className="fab fa-google"></i>
                  </a>

                  {/* Instagram  */}
                  <a
                    className="btn btn-primary btn-floating m-1"
                    style={{ backgroundColor: " #ac2bac" , borderRadius:"2vw", border:"none"}}
                    href="#!"
                    role="button"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>

                  {/* Linkedin  */}
                  <a
                    className="btn btn-primary btn-floating m-1"
                    style={{ backgroundColor: " #0082ca", borderRadius:"2vw", border:"none"}}
                    href="#!"
                    role="button"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  {/* Github  */}
                  {/* <a
                    className="btn btn-primary btn-floating m-1"
                    style={{ backgroundColor: " #333333" }}
                    href="#!"
                    role="button"
                  >
                    <i className="fab fa-github"></i>
                  </a> */}
                </div>
              </div>
              {/*Grid row */}
            </section>
            {/* Section: Links  */}
          </div>
          {/* Grid container  */}

          {/* Copyright  */}
          <div
            className="text-center p-2"
            style={{
              backgroundColor: Colors.Background,
              fontFamily: "Gilroy-SemiBold",
              fontSize: "1.5vw",
            }}
          >
            Made with <img className="last_img" src={emoj1} /> in{" "}
            <img className="last_img" src={emoj2} /> by Team{" "}
            <span class="text-orange">U</span>
            <span style={{ color: Colors.LightBlue }}>WO</span>
            <VisitorCount/>
          </div>
          
          {/* Copyright  */}
        </footer>
        {/* Footer  */}
      </div>
      {/* End of .container  */}
    </>
  );
};

export default Footer;
