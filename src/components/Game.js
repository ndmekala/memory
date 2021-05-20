import React, { useEffect, useState } from "react";
import Card from './Card.js'
import '../styles/game.css'


const Game = (props) => {
    
    function randomizeBoard(array) {
        let indexes = [];
        let allUnpicked = array.filter(element => element.picked === false);
        let randomUnpickedCard = allUnpicked[Math.floor(Math.random()*allUnpicked.length)];
        let unpickedCardIndex = cards.findIndex((element) => element === randomUnpickedCard);
        indexes.push(unpickedCardIndex);
        while (indexes.length < 3) {
            let i = Math.floor(Math.random()*array.length);
            if (!indexes.includes(i)) {
                let randomizer = Math.floor(Math.random()*2)
                if (randomizer) {
                    indexes.push(i);
                } else {
                    indexes.unshift(i);
                }
            };
        };
        return indexes
    }

    function handlePick(e) {
        let opening = e.target.id;
        let stateCopy = cards;
        let index = cards.findIndex((element) => element.opening === opening)
        if (cards[index].picked) {
            props.lossSequence(score);
        } else {
            let i = score;
            i++;
            setScore(i);
            stateCopy[index].picked = !cards[index].picked;
            setCards([...stateCopy]);
        }
    }
    const cardFactory = (opening, fullTitle, fen, picked) => {
        return {opening, fullTitle, fen, picked}
    }

    const [cards, setCards] = useState([
        cardFactory('ruy', 'Ruy Lopez', 'r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 0 3', false), 
        cardFactory('italian', 'Italian Game', 'r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 0 3', false),
        cardFactory('sicilian', 'Sicilian Defense', 'rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2', false),
        cardFactory('french', 'French Defense', 'rnbqkbnr/pppp1ppp/4p3/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2', false),
        cardFactory('carokann', 'Caro-Kann Defense', 'rnbqkbnr/pp1ppppp/2p5/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2', false),
        cardFactory('pirc', 'Pirc Defense', 'rnbqkbnr/ppp1pppp/3p4/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2', false),
        cardFactory('queens', 'Queen’s Gambit', 'rnbqkbnr/ppp1pppp/8/3p4/2PP4/8/PP2PPPP/RNBQKBNR b KQkq - 0 2', false),
        cardFactory('indian', 'Indian Defenses', 'rnbqkb1r/pppppppp/5n2/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 2', false),
        cardFactory('english', 'English Opening', 'rnbqkbnr/pppppppp/8/8/2P5/8/PP1PPPPP/RNBQKBNR b KQkq - 0 1', false),
        cardFactory('reti', 'Reti Opening', 'rnbqkbnr/pppppppp/8/8/8/5N2/PPPPPPPP/RNBQKB1R b KQkq - 0 1', false),
    ])
    const [indexes, setIndexes] = useState(randomizeBoard(cards))
    const [score, setScore] = useState(0)

    useEffect(() => {
        if (score < 10) {
            setIndexes(randomizeBoard(cards))
        } else {
            props.winSequence(score)
        }
    }, [cards]);

    return (
        <div className="game-wrapper">
            <div className="game-rulesandscore">
                <div className="game-rules">
                <p>This game tests your memory. Don’t click the same opening twice!</p>
                </div>
                <div className="game-score">
                <table>
                <tr>
                    <td className="game-score-label">Score:</td>
                    <td>{score}</td>
                </tr>
                <tr>
                    <td className="game-score-label">High Score:</td>
                    <td>{props.hiScore}</td>
                </tr>
            </table>

                </div>
            </div>
            <div className="game-cards">
            {indexes.map((index) => (
                <Card pick={handlePick} key={cards[index].opening} data={cards[index]} />
            ))}
            </div>
        </div>
    )
}

export default Game