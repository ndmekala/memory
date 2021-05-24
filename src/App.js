import React, { useState } from "react";
import Game from "./components/Game.js";
import Loss from "./components/Loss.js";
import Win from "./components/Win.js";
import Menu from "./components/Menu.js";
import "./styles/app.css";

const App = () => {
  const [mountGame, setMountGame] = useState(true);
  const [mountLoss, setMountLoss] = useState(false);
  const [mountWin, setMountWin] = useState(false);
  const [hiScore, setHiScore] = useState(0);

  function videoLoaded() {
	console.log('heyyyaaa')
  }

  function lossSequence(score) {
    if (score > hiScore) {
      setHiScore(score);
    }
    setMountGame(false);
    setMountLoss(true);
  }

  function winSequence(score) {
    setHiScore(score);
    setMountGame(false);
    setMountWin(true);
  }

  function newGame() {
    setMountLoss(false);
    setMountWin(false);
    setMountGame(true);
  }

  return (
    <div className="app">
      <Menu />
      {mountLoss && <Loss newGame={newGame} />}
      {mountWin && <Win newGame={newGame} />}
      <section className="app-hero">
        <video onLoad={videoLoaded} autoPlay muted loop playsInline>
          <source
            src="./queensgambit_headervid_01.mp4"
            type="video/mp4"
          ></source>
        </video>
        <div className="app-hero-container">
          <h1 className="app-miniheader">The</h1>
          <h1>Queen’s</h1>
          <h1>Gambit</h1>
          <button
            onClick={() => {
              document.querySelector(".game-wrapper").scrollIntoView();
            }}
          >
            Play
          </button>
        </div>
      </section>
      <div className="app-game-container">
        {mountGame && (
          <Game
            lossSequence={lossSequence}
            winSequence={winSequence}
            hiScore={hiScore}
          />
        )}
      </div>
    </div>
  );
};

export default App;
