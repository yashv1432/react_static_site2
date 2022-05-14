import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import pic from "../Images/pic.jpg";
import testi1 from "../img/testii.png";
// import "../assets/css/slider.css";
// import "../assets/phone-css/sliderphone.css";

const TopInfluencer = () => {
  const options = {
    nav: false,
    autoplay: true,
    dots: false,
    loop:true,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 1,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div className="Container_1" style={{marginTop:"-14vw"}}>
      <h1 className="mx-5 head_testimonial">Testimonials</h1>
      <div className="section4y">
        <div className="row row1y">
          <div className="col-lg-12 col-md-4 col-sm-4 col-12 box">
            <div className="items1y">
              <OwlCarousel
                className="owl-theme"
                loop
                margin={10}
                nav
                // items={5}
                {...options}
              >
                <div className="col-lg-12 col-md-4 col-sm-4 col-12 ">
                  <img className="testi_img" src={testi1} alt="testi" />

                  <div className="boxitem">
                    <div className="itemy ">
                      <img src={pic} />
                      <h2>Lorem Ipsum</h2>
                      <p>Lorem Ipsum</p>
                      <p className="paratestimonials">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Magnis nunc congue quam sociis libero eu.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-4 col-sm-4 col-12 ">
                  <img className="testi_img" src={testi1} alt="testi" />

                  <div className="boxitem">
                    <div className="itemy">
                      <img src={pic} />
                      <h2>Lorem Ipsum</h2>
                      <p>Lorem Ipsum</p>
                      <p className="paratestimonials">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Magnis nunc congue quam sociis libero eu.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-4 col-sm-4 col-12 ">
                  <img className="testi_img" src={testi1} alt="testi" />

                  <div className="boxitem">
                    <div className="itemy">
                      <img src={pic} />
                      <h2>Lorem Ipsum</h2>
                      <p>Lorem Ipsum</p>
                      <p className="paratestimonials">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Magnis nunc congue quam sociis libero eu.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-4 col-sm-4 col-12 ">
                  <img className="testi_img" src={testi1} alt="testi" />

                  <div className="boxitem">
                    <div className="itemy">
                      <img src={pic} />
                      <h2>Lorem Ipsum</h2>
                      <p>Lorem Ipsum</p>
                      <p className="paratestimonials">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Magnis nunc congue quam sociis libero eu.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-4 col-sm-4 col-12 ">
                  <img className="testi_img" src={testi1} alt="testi" />

                  <div className="boxitem">
                    <div className="itemy">
                      <img src={pic} />
                      <h2>Lorem Ipsum</h2>
                      <p>Lorem Ipsum</p>
                      <p className="paratestimonials">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Magnis nunc congue quam sociis libero eu.
                      </p>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopInfluencer;
