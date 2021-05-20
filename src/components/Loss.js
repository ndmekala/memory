import React from "react";
import '../styles/video.css'

const Loss = (props) => {

    return (
        <div className="video-wrapper">
            <video autoPlay onEnded={props.newGame}>
                <source src="./queensgambit_lossvid.mp4" type="video/mp4"></source>
            </video>
        </div>
    )
}

export default Loss