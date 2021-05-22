import React from "react";
import "../styles/video.css";

const Loss = (props) => {
  return (
    <div className="video-wrapper">
      <video autoPlay playsInline onEnded={props.newGame}>
        <source src="./queensgambit_lossvid.mp4" type="video/mp4"></source>
      </video>
      <div className="video-message">Oh no! You’ve lost!</div>
    </div>
  );
};

export default Loss;
