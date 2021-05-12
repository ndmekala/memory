import React, { useEffect, useState } from "react";
import { Chessboard } from '../cm-chessboard/Chessboard'
import '../styles/cm-chessboard.css'

const Card = (props) => {

    useEffect(() => {
        new Chessboard(document.getElementById(props.data.opening), {position: "start", sprite: {url: "../assets/images/chessboard-sprite.svg"}})
      }, [props]);

    return (
        <div style={{border: "1px solid black", margin: "5px", width: "400px"}}>
            <ul>
                <li>{props.data.opening}</li>
                <li>{props.data.fullTitle}</li>
                <li>{props.data.fen}</li>
            </ul>
            <div id={props.data.opening} style={{margin: "10px"}}>
            </div>
        </div>
    )
}

export default Card