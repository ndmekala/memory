import React from "react";
import "../styles/video.css";

const Win = (props) => {
  return (
    <div className="video-wrapper">
      <video autoPlay playsInline onEnded={props.newGame}>
        <source src="./queensgambit_winvid.mp4" type="video/mp4"></source>
      </video>
      <div className="video-message">Hooray! You win!</div>
    </div>
  );
};

export default Win;
