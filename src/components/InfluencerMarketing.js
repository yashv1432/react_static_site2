import React from "react";
import Ellipse from "../components/icons/Ellipse.png";
import insta from "../components/icons/insta.png";
import chat from "../components/icons/chat.png";
import youtube from "../components/icons/youtube.png";
import FacebookOctDenoiserBeauty_001 from "../components/icons/FacebookOctDenoiserBeauty_001.png";
import InstagramOctDenoiserBeauty_001 from "../components/icons/InstagramOctDenoiserBeauty_001.png";
import YoutubeOctDenoiserBeauty_001 from "../components/icons/YoutubeOctDenoiserBeauty_001.png";


const InfluencerMarketing = () => {
  return (
    <>
      <div className="InfluencerMarketing">
        <div className="influencer_images">
          <div className="left_top_box ">
          <div className="InstagramOctDenoiserBeauty_001">
                <img src={InstagramOctDenoiserBeauty_001} alt="InstagramOctDenoiserBeauty_001"/>
              </div>
            <div className="left_bottom_box">
            <div className="FacebookOctDenoiserBeauty_001">
                <img src={FacebookOctDenoiserBeauty_001} alt="FacebookOctDenoiserBeauty_001"/>
              </div>
            </div>
          </div>

          <div className="right_top_box ">
            <div className="right_bottom_box ">
            <div className="YoutubeOctDenoiserBeauty_001">
                <img src={YoutubeOctDenoiserBeauty_001} alt="YoutubeOctDenoiserBeauty_001"/>
              </div>
            </div>
          </div>
        </div>

        <div className="influencer_content">
          <h1>
            <span> Influencer </span> Marketing
          </h1>
          <p>
            nibh odio arcu lectus. Eget auctor suspendisse sem vel vestibulum.
            Ipsum <br /> vulputate diam duis tincidunt. Mauris eu blandit
            viverra vitae sit velit sit ut
            <br /> aliquet. Sit suspendisse.
          </p>
          <div className="rows_element">
            <div className="ellipse_1">
              <img src={Ellipse} alt="Ellipse" />
              <div className="insta">
                <img src={insta} alt=" insta" />
              </div>
            </div>
            <div className="content_rectangle_1">
              <h2>Instagram Marketing</h2>
              <p className="mx-4">
                nibh odio arcu lectus. Eget auctor suspendisse sem vel
                vestibulum. Ipsum <br />
                vulputate diam duis tincidunt. Mauris eu blandit viverra vitae
                sit velit sit ut
              </p>
            </div>

            <div className="ellipse_2">
              <img src={Ellipse} alt="Ellipse" />
              <div className="youtube">
                <img src={youtube} alt="youtube" />
              </div>
            </div>
            <div className="content_rectangle_2">
              <h2>YouTube Marketing</h2>
              <p className="mx-4">
                nibh odio arcu lectus. Eget auctor suspendisse sem vel
                vestibulum. Ipsum <br /> vulputate diam duis tincidunt. Mauris
                eu blandit viverra vitae sit velit sit ut
              </p>
            </div>
            <div className="ellipse_3">
              <img src={Ellipse} alt="Ellipse" />
              <div className="chat">
                <img src={chat} alt=" chat" />
              </div>
            </div>
            <div className="content_rectangle_3">
              <h2>Other Platforms</h2>
              <p className="mx-4">
                nibh odio arcu lectus. Eget auctor suspendisse sem vel
                vestibulum. Ipsum <br />
                vulputate diam duis tincidunt. Mauris eu blandit viverra vitae
                sit velit sit ut
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfluencerMarketing;
