import React, { useEffect, useState } from "react";
import { Chessboard } from "cm-chessboard"
import "../styles/cm-chessboard.css"

const Card = (props) => {

    useEffect(() => {
        const board = new Chessboard(document.getElementById(props.data.opening), {position: 'start', sprite: {url: "./chessboard-sprite-staunty.svg"}})
        setTimeout(function() {board.setPosition(props.data.fen)}, 1000)
      }, [props]);

    return (
        <div style={{border: "1px solid black", margin: "5px", width: "50vw"}}>
            <h1>{props.data.fullTitle}</h1>
            <div id={props.data.opening} style={{margin: "10px"}}>
            </div>
        </div>
    )
}

export default Card