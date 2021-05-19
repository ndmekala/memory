import React from "react";
import YouTube from 'react-youtube';

const Loss = (props) => {

    const opts = {
        height: '780',
        width: '1280',
        playerVars: {
            autoplay: 1,
            controls: 0,
            disablekb: 1,
            modestbranding: 1,
            start: 62,
            end: 82,
            showinfo: 0,
            fs: 0,
        }
    }

    return (
        <div>
            <YouTube videoId="f_VIMtlCZzY" opts={opts} onEnd={props.newGame}/>
        </div>
    )
}

export default Loss