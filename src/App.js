import React, { useState } from "react";
import Game from './components/Game.js'
import Loss from './components/Loss.js'
import Win from './components/Win.js'

const App = () => {
  const [mountGame, setMountGame] = useState(true);
  const [mountLoss, setMountLoss] = useState(false);
  const [mountWin, setMountWin] = useState(false);
  const [hiScore, setHiScore] = useState(0);
  
  function lossSequence(score) {
    if (score > hiScore) {
      setHiScore(score)
    }
    setMountGame(false);
    setMountLoss(true);
  }

  function winSequence(score) {
    setHiScore(score)
    setMountGame(false);
    setMountWin(true);
  }

  function newGame() {
    setMountLoss(false);
    setMountWin(false);
    setMountGame(true);
  }

  return (
    <div>
      {mountGame && <Game lossSequence={lossSequence} winSequence={winSequence} hiScore={hiScore} />}
      {mountLoss && <Loss newGame={newGame} />}
      {mountWin && <Win newGame={newGame} />}
    </div>
  );
}

export default App;
