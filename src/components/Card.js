import React, { useEffect, useState } from "react";
import { Chessboard } from "cm-chessboard"
import "../styles/cm-chessboard.css"
import '../styles/card.css'

const Card = (props) => {

    useEffect(() => {
        const board = new Chessboard(document.getElementById(props.data.opening), {position: 'start', sprite: {url: "./chessboard-sprite-staunty.svg"}})
        setTimeout(function() {board.setPosition(props.data.fen)}, 1000)
      }, [props.data.opening]);

    return (
        <div className="card-wrapper">
            {props.mode && <h1>{props.data.fullTitle}</h1>}
            <div id={props.data.opening}>
            </div>
            <button id={props.data.opening + '-button'} onClick={props.pick} className="card-button">Pick me!</button>
        </div>
    )
}

export default Card