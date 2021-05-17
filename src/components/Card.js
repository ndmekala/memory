import React, { useEffect, useState } from "react";
import { Chessboard } from "cm-chessboard"
import "../styles/cm-chessboard.css"

const Card = (props) => {

    useEffect(() => {
        new Chessboard(document.getElementById(props.data.opening), {position: props.data.fen, sprite: {url: "./chessboard-sprite.svg"}})
      }, [props]);

    return (
        <div style={{border: "1px solid black", margin: "5px", width: "400px"}}>
            <ul>
                <li>{props.data.fullTitle}</li>
                <li>{props.data.fen}</li>
            </ul>
            <div id={props.data.opening} style={{margin: "10px"}}>
            </div>
        </div>
    )
}

export default Card