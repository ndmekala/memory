import React from "react";
import '../styles/video.css'

const Win = (props) => {

    return (
        <div className="video-wrapper">
            <video autoPlay onEnded={props.newGame}>
                <source src="./queensgambit_winvid.mp4" type="video/mp4"></source>
            </video>
        </div>
    )
}

export default Win