import React, { useState, useEffect } from "react";

const Video_ProgressLine = () => {

  const [count, setCount] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [progressWidth, setProgressWidth] = useState(0);

  var timer;

  useEffect(() => {
    timer = setInterval(() => {
      
      setSeconds(seconds + 1);
      setProgressWidth(progressWidth + 2.9);
      
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
  return (
    <div
    className="video_progress_line_mob "
    style={{ width: progressWidth }}
  ></div>
  )
}

export default Video_ProgressLine;