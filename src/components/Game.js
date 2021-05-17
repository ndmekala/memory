import React, { useEffect, useState } from "react";
import Card from './Card.js'


const Game = () => {
    
    function randomizeBoard(array) {
        let indexes = []
        while (indexes.length < 3) {
            let i = Math.round(Math.random()*(array.length-1))
            if (!indexes.includes(i)) {
                indexes.push(i)
            }
        }
        return(indexes)
    }

    const cardFactory = (opening, fullTitle, fen) => {
        return {opening, fullTitle, fen}
    }

    const [cards, setCards] = useState([
        cardFactory('ruy', 'Ruy Lopez', 'r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 0 3'), 
        cardFactory('italian', 'Italian Game', 'r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 0 3'),
        cardFactory('sicilian', 'Sicilian Defense', 'rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2'),
        cardFactory('french', 'French Defense', 'rnbqkbnr/pppp1ppp/4p3/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2'),
        cardFactory('carokann', 'Caro-Kann Defense', 'rnbqkbnr/pp1ppppp/2p5/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2'),
        cardFactory('pirc', 'Pirc Defense', 'rnbqkbnr/ppp1pppp/3p4/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2'),
        cardFactory('queens', 'Queen’s Gambit', 'rnbqkbnr/ppp1pppp/8/3p4/2PP4/8/PP2PPPP/RNBQKBNR b KQkq - 0 2'),
        cardFactory('indian', 'Indian Defenses', 'rnbqkb1r/pppppppp/5n2/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 2'),
        cardFactory('english', 'English Opening', 'rnbqkbnr/pppppppp/8/8/2P5/8/PP1PPPPP/RNBQKBNR b KQkq - 0 1'),
        cardFactory('reti', 'Reti Opening', 'rnbqkbnr/pppppppp/8/8/8/5N2/PPPPPPPP/RNBQKB1R b KQkq - 0 1'),
    ])

    const [indexes, setIndexes] = useState(randomizeBoard(cards))

    useEffect(() => {
    })

    return (
        <div>
            {indexes.map((index) => (
                <Card key={cards[index].opening} data={cards[index]}/>
            ))}
        </div>
    )
}

export default Game