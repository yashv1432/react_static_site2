// import { Colors } from "../utils/Colors";
import React, { useState } from "react";
import medal from "../components/icons/medal.png";
import Rectangle from "../components/icons/Rectangle.png";
import bag from "../components/icons/bag.png";
import Arrow from "../components/icons/Arrow.png";
import ShapeOneArrow from "../components/icons/ShapeOneArrow.png";
// import VisitorCount from "./VisitorCount";

export default function WhatWeDo() {
  const [cardWidthAnimation, setCardWidthAnimation] = useState("870px");
  const [cardWidthAnimation2, setCardWidthAnimation2] = useState("450px");

  const handleAnimation = () => {
    setCardWidthAnimation(cardWidthAnimation === "870px" ? "450px" : "870px");
    setCardWidthAnimation2(
      !(cardWidthAnimation === "870px") ? "450px" : "870px"
    );
    // console.log(cardWidthAnimation);
    // console.log(cardWidthAnimation2);
  };

  const handleAnimation2 = () => {
    setCardWidthAnimation2(cardWidthAnimation2 === "870px" ? "450px" : "870px");
    setCardWidthAnimation(
      !(cardWidthAnimation2 === "870px") ? "450px" : "870px"
    );
    console.log(cardWidthAnimation);
    console.log(cardWidthAnimation2);
  };

  return (
    <>
    
      <div className="Container_1 Container1 my-5">
        <h1 className="my-5">
          What We <span style={{ color: "#ffc100" }}>Do</span>
        </h1>
        <div className="Shapes_1">
          <div className="ShapeOne_1" style={{ width: cardWidthAnimation }}>
            <div>
              <h3>
                For <br /> Influencers
              </h3>
              <div className="line_1" />
            </div>
            <p className="main_para_1">
              "Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit,
              <br />
              sed do eiusmod tempor
              <br /> incididunt ut labore et dolore <br />
              magna aliqua.
            </p>

            {/* Cards */}
            {cardWidthAnimation === "870px" ? (
              <div className="Cards_1 ">
                <div
                  className="card1_1 "
                  style={{ width: "10vw", height: "13vw" }}
                >
                  <div className="Medal_1  ">
                    <img src={medal} />
                  </div>
                  <div className="card-body_1">
                    <h5 className="card-title_1 mx-2">LOREM IPSUM</h5>
                    <p className="card-text_1 mx-3 ">
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore
                      magna.
                    </p>
                  </div>
                </div>

                <div
                  className="card2_1 mx-4"
                  style={{ width: "10vw", height: "13vw" }}
                >
                  <div className=" Rectangle_1 ">
                    <img src={Rectangle} />
                  </div>
                  <div className="card-body_1">
                    <h5 className="card-title_1  mx-2 ">LOREM IPSUM</h5>
                    <p className="card-text_1 mx-3">
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore
                      magna.
                    </p>
                  </div>
                </div>
                {cardWidthAnimation === "870px" ? (
                  <div
                    onClick={handleAnimation}
                    className="ShapeOneArrow_1 my-auto"
                  >
                    <img src={ShapeOneArrow} />
                  </div>
                ) : (
                  <></>
                )}
              </div>
            ) : (
              <></>
            )}
          </div>

          <div className="ShapeTwo_1" style={{ width: cardWidthAnimation2 }}>
            <div
              className="ShapeTwo_HeadAndImage_1"
              style={{ display: "flex" }}
            >
              <div className="Heading_1 mx-3">
                <h3>
                  For <br /> Brands
                </h3>
              </div>
              <div className="bagImg_1 mx-3">
                <img src={bag} />
              </div>
              <div className="ShapeTwoLine_1" />
            </div>
            <p className="ShapeTwo_main_para_1">
              "Lorem ipsum dolor sit amet,
              <br /> consectetur adipiscing elit,
              <br /> sed do eiusmod tempor <br /> incididunt ut labore et dolore
              <br /> magna aliqua.
            </p>

            {/* Cards in ShapeTwo */}
            {cardWidthAnimation2 === "870px" ? (
              <div className="ShapeTwo_Cards_1">
                <div
                  className="ShapeTwo_card1_1 "
                  style={{ width: "10vw", height: "13vw" }}
                >
                  <div className="ShapeTwo_Medal_1  ">
                    <img src={medal} />
                  </div>
                  <div className="ShapeTwo_card-body_1">
                    <h5 className="ShapeTwo_card-title_1 ">LOREM IPSUM</h5>
                    <p className="ShapeTwo_card-text_1 mx-3">
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore
                      magna.
                    </p>
                  </div>
                </div>

                <div
                  className="ShapeTwo_card2_1 mx-4"
                  style={{ width: "10vw", height: "13vw" }}
                >
                  <div className="ShapeTwo_Rectangle_1 ">
                    <img src={Rectangle} />
                  </div>
                  <div className="ShapeTwo_card-body_1">
                    <h5 className="ShapeTwo_card-title_1 mx-2 ">LOREM IPSUM</h5>
                    <p className="ShapeTwo_card-text_1 mx-3">
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore
                      magna.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}

            {cardWidthAnimation2 === "870px" ? (
              <div onClick={handleAnimation2} className="arrowImage_1 my-6 ">
                <img src={Arrow} alt="" />
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
{/* Mobile view start */}

        <div className="Shapes_mob">
          <div className="ShapeOne_mob">
            <div className="ShapeOne_heading_mob" style={{fontSize:"4vw"}}>
              <h3>
                For <br /> Influencers
              </h3>
              <div className="line_mob" />
            </div>
            <p className="main_para_mob">
              "Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit,
              <br />
              sed do eiusmod tempor
              <br /> incididunt ut labore et dolore <br />
              magna aliqua.
            </p>

            {/* Cards */}
 
              <div className="Cards_mob ">
                <div
                  className="card1_mob "
                >
                  <div className="Medal_mob  ">
                    <img src={medal} />
                  </div>
                  <div className="card-body_1">
                    <h5 className="card-title_mob mx-2">LOREM IPSUM</h5>
                    <p className="card-text_mob mx-3 ">
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore
                      magna.
                    </p>
                  </div>
                </div>

                <div
                  className="card2_mob mx-4"
               
                >
                  <div className=" Rectangle_mob ">
                    <img src={Rectangle} />
                  </div>
                  <div className="card-body_1">
                    <h5 className="card-title_mob  mx-2 ">LOREM IPSUM</h5>
                    <p className="card-text_mob mx-3">
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore
                      magna.
                    </p>
                  </div>
                </div>
              </div>
           
          </div>

          <div className="ShapeTwo_mob my-4">
            <div
              className="ShapeTwo_HeadAndImage_1"
              style={{ display: "flex" }}
            >
              <div className="ShapeTwo_Heading_mob mx-3">
                <h3>
                  For <br /> Brands
                </h3>
              </div>
              
              <div className="ShapeTwoLine_mob" />
            </div>
            <p className="ShapeTwo_main_para_mob">
              "Lorem ipsum dolor sit amet,
              <br /> consectetur adipiscing elit,
              <br /> sed do eiusmod tempor <br /> incididunt ut labore et dolore
              <br /> magna aliqua.
            </p>

            {/* Cards in ShapeTwo */}

              <div className="ShapeTwo_Cards_mob">
                <div
                  className="ShapeTwo_card1_mob "
        
                >
                  <div className="ShapeTwo_Medal_mob  ">
                    <img src={medal} />
                  </div>
                  <div className="ShapeTwo_card-body_1">
                    <h5 className="ShapeTwo_card-title_mob ">LOREM IPSUM</h5>
                    <p className="ShapeTwo_card-text_mob mx-3">
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore
                      magna.
                    </p>
                  </div>
                </div>

                <div
                  className="ShapeTwo_card2_mob mx-4"
        
                >
                  <div className="ShapeTwo_Rectangle_mob ">
                    <img src={Rectangle} />
                  </div>
                  <div className="ShapeTwo_card-body_1">
                    <h5 className="ShapeTwo_card-title_mob mx-2 ">LOREM IPSUM</h5>
                    <p className="ShapeTwo_card-text_mob mx-3">
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore
                      magna.
                    </p>
                  </div>
                </div>
              </div>
           
          </div>
        </div>
      </div>
    </>
  );
}
