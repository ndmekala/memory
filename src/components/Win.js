import React from "react";
import YouTube from 'react-youtube';

const Win = (props) => {

    const opts = {
        height: '780',
        width: '1280',
        playerVars: {
            autoplay: 1,
            controls: 0,
            disablekb: 1,
            modestbranding: 1,
            start: 55,
            end: 89,
            showinfo: 0,
            fs: 0,
        }
    }

    return (
        <div>
            <YouTube videoId="dtD3FVJ37Rk" opts={opts} onEnd={props.newGame}/>
        </div>
    )
}

export default Win