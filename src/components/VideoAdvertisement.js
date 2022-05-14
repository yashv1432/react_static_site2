import React, { useState, useEffect } from "react";
import video_image from "../components/icons/video_image.png";
import diamond from "../components/icons/diamond.png";
import sound from "../components/icons/sound.png";
import earth from "../components/icons/earth.png";
import setting_icon from "../components/icons/setting_icon.png";
import video_play from "../components/icons/video_play.png";
import volume_eclipse from "../components/icons/volume_eclipse.png";
import valume from "../components/icons/valume.png";
import valume_line from "../components/icons/valume_line.png";
import video_icon from "../components/icons/video_icon.png";
import video_screen from "../components/icons/video_screen.png";
import share_video from "../components/icons/share_video.png";
import pause from "../components/icons/pause.png";
import video_full_screen from "../components/icons/video_full_screen.png";

import Typist from "react-typist";
// import Video_ProgressLilne from "./Video_ProgressLine";
import Video_ProgressLine from "./Video_ProgressLine";

const VideoAdvertisement = () => {
  const [count, setCount] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [progressWidth, setProgressWidth] = useState(0);

  var timer;

  useEffect(() => {
    timer = setInterval(() => {
      
      setSeconds(seconds + 1);
      setProgressWidth(progressWidth + 11.2);

      if (seconds === 59) {
        setMinutes(minutes + 1);
        setSeconds(0);
      }
      if (minutes === 2) {
        setMinutes(0);
        setProgressWidth(0);
      }
    }, 1000);
    return () => clearInterval(timer);
  });

  useEffect(() => {
    // document.title = `You clicked ${count} times`;
    // console.log("Count: " + count);
    setCount(1);
  }, [count]);

  return (
    <>
      <div className="VideoAvertisement">
        <div className="top_icons_videoAdvertisement">
          <div className="video_icon">
            <img src={video_icon} alt="" />
          </div>
          <div className="setting_icon">
            <img src={setting_icon} alt="" />
          </div>
        </div>
        <div className="main_heading">
          <h1>
            <span>Video</span> Advertisement
          </h1>
        </div>
        <div className="imageAndContent">
          <div className=" video_image col-lg-6 col-sm-12 col-xs-12 col-md-4">
            <img src={video_image} alt="video image" />
          </div>

          <div className="rightSide_content mx-3 col-lg-6 col-sm-12 col-xs-12 col-md-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magnis
              nunc congue quam sociis libero eu. Dui commodo Id nibh odio arcu
              lectus. Eget auctor <br />
              <br />
              Mauris eu blandit viverra vitae sit velit sit ut aliquet. Sit
              suspendisse. Id nibh odio arcu lectus. Eget auctor vel vestibulum.
              Ipsum vulputate diam duis tincidunt. Mauris eu blandit viverra
              vitae sit velit sit ut aliquet.
            </p>
            <div className="type_text">
              <span className="text_type_effect typist">
                {count ? (
                  <Typist
                    key={count}
                    avgTypingDelay={50}
                    onTypingDone={() => setCount(0)}
                  >
                    <span>
                      The Hidden <img src={diamond} alt="diamond" /> of{"  "}
                      <img src={sound} alt="diamond" />
                      {"  "} Marketing World{"  "}
                      <img src={earth} alt="diamond" />
                      {"  "}
                    </span>
                    <Typist.Backspace count={30} delay={500} />
                  </Typist>
                ) : (
                  <></>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="video_player">
        <div className="video_main_line">
          <div className="video_progress_line_mob">
          <Video_ProgressLine/>
          </div>
          <div
            className="video_progress_line "
            style={{ width: progressWidth }}
          ></div>
        </div>

        <div className="video_left_icons mx-5 py-4">
          <div className="video_play mx-3">
            <img src={video_play} alt="play_video" />
          </div>
          <div className="pause mx-3">
            <img src={pause} alt="pause" />
          </div>
          <div className="valume mx-3">
            <img src={valume} alt="valume" />
          </div>
          <div className="valume_line">
            <img src={valume_line} alt="valume_line" />
          </div>
          <div className="volume_eclipse">
            <img src={volume_eclipse} alt="volume_eclipse" />
          </div>
          <div className="time mx-3">
            {minutes < 10 ? "0" + minutes : minutes}:
            {seconds < 10 ? "0" + seconds : seconds}/02:00
          </div>
        </div>
        <div className="video_right_icons">
        <div className="share_video mx-3">
            <img src={share_video} alt="share_video" />
          </div>
          <div className="video_screen  mx-3">
            <img src={video_screen } alt="video_screen " />
          </div>
          <div className="video_full_screen mx-3">
            <img src={video_full_screen} alt="video_full_screen" />
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoAdvertisement;
