import React from "react";
import Ellipse_work from "../../components/icons/Ellipse_work.png";
import PlantVita from "../../components/icons/PlantVita.png";
import CredX from "../../components/icons/CredX.png";
import MountNutra from "../../components/icons/MountNutra.png";
import BiwBiw from "../../components/icons/BiwBiw.png";
import eatopia from "../../components/icons/eatopia.png";

const OurWork = () => {
  
  return (
    <div className="OurWork_section container">
      <div className="ourwork_content">
        <h1>
          Our <span>Work</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magnis nunc <br/>
          congue quam sociis libero eu. Dui commodo Id nibh odio arcu lectus.<br/>
          Eget auctor suspendisse sem vel vestibulum. Ipsum vulputate diam duis<br/>
          tincidunt. Mauris eu blandit viverra vitae sit velit sit ut aliquet.
          Sit<br/> suspendisse. <br/> <br/>Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Magnis nunc  <br/>congue quam sociis libero eu. Dui commodo Id nibh
          odio arcu lectus. <br/>Eget auctor suspendisse sem vel vestibulum.
        </p>
      </div>
      <div className="ourwork_animation">
        <div className="ourwork_ellipse_1">
         <div className="planVita">  <img src={PlantVita} alt="PlantVita" />  </div> 
          <img src={Ellipse_work} alt="Ellipse_work" />
        </div>
        <div className="ourwork_ellipse_2">
         <div className="CredX">  <img src={CredX} alt="CredX" />  </div> 
          <img src={Ellipse_work} alt="Ellipse_work" />
        </div>
        <div className="ourwork_ellipse_3">
        <div className="MountNutra">  <img src={MountNutra} alt="MountNutra" />  </div> 
          <img src={Ellipse_work} alt="Ellipse_work" />
        </div>
        <div className="ourwork_ellipse_4">
        <div className="BiwBiw">  <img src={BiwBiw} alt="BiwBiw" />  </div> 
          <img src={Ellipse_work} alt="Ellipse_work" />
        </div>
        <div className="ourwork_ellipse_5">
        <div className="eatopia">  <img src={eatopia} alt="eatopia" />  </div> 
          <img src={Ellipse_work} alt="Ellipse_work" />
        </div>
        {/* <div className="circle"></div> */}
      </div>
    
    </div>
  );
};

export default OurWork;
