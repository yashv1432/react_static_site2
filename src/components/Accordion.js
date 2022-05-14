import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import acco_img_top from "../img/Rectangle.png";
import acco_arrow from "../img/button.png";

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className="Container Container1 py-5">
      <h1
        className="my-3 mx-2 White"
        style={{ fontFamily: "Playfair_Extrabold" }}
      >
        Why Us <span style={{ color: "#ffc100" }}>?</span>
      </h1>
      <img className="accro_img_head" src={acco_img_top} alt="" />
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        className="Background-dark-blue "
        style={{ boxShadow: "none" }}
      >
        <AccordionSummary
          aria-controls="panel1d-content"
          id="panel1d-header"
          className="mystyle "
        >
          {/* <div className="padaccro"> */}
          <div className="accro_box ">
            <div>
              <img
                className="accro_img_box"
                src="https://media.istockphoto.com/photos/astronaut-lying-in-the-meadow-picture-id1304263738"
                alt="yy"
              />
            </div>
          </div>
          <Typography>
            <h2 className="head1footer">Lorem Ipsum Dolor Sit</h2>
            <p className="para1footer">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </Typography>
          {/* </div> */}
          <div class="downArrow bounce">
            <img className="img_arrow" alt="" src={acco_arrow} />
          </div>
        </AccordionSummary>

        <AccordionDetails className="mystyle_details">
          <div className="accro_box ">
            <div>
              <img
                className="accro_img_box"
                src="https://media.istockphoto.com/photos/astronaut-lying-in-the-meadow-picture-id1304263738"
                alt="yy"
              />
            </div>
          </div>
          <Typography>
            <h2 className="head1footer_details">Consectetur Adipiscing Elit</h2>
            <p className="para1footer_details">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </Typography>

          {/* <AccordionDetails
        className="mystyle_details "> */}
          <div className="accro_box margin_img">
            <div>
              <img
                className="accro_img_box"
                src="https://media.istockphoto.com/photos/astronaut-lying-in-the-meadow-picture-id1304263738"
                alt="yy"
              />
            </div>
          </div>
          <Typography>
            <h2 className="head1footer_details">Sed do Eiusmod Tempor</h2>
            <p className="para1footer_details">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labosre et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
