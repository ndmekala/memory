import React, { useEffect, useState } from "react";
import { Chessboard } from "cm-chessboard"
import "../styles/cm-chessboard.css"
import '../styles/card.css'

const Card = (props) => {

    useEffect(() => {
        const board = new Chessboard(document.getElementById(props.data.opening + "-board"), {position: 'start', sprite: {url: "./chessboard-sprite-staunty.svg"}})
        setTimeout(function() {board.setPosition(props.data.fen)}, 500)
        return () => {
            board.destroy()
        }
      });

    return (
        <div className="card-wrapper" id={props.data.opening} onClick={props.pick} >
            <div className="card-board" id={props.data.opening + "-board"}>
            </div>
            <h2>{props.data.fullTitle}</h2>
        </div>
    )
}

export default Card