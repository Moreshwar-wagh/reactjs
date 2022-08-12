import React, { useEffect, useState } from 'react';
import Square from "./Square"


function Game(props) {
    // console.log(props.val)

    const { firstplayer, secondplayer } = props.val;

    const [gameState, updateGameState] = useState(Array(9).fill(null))
    const [isXChance, updateIsXChance] = useState(true)



    useEffect(() => {
        let winner = checkWinner();
        if (winner) {
            clearGame();
            alert(`Hey! ${isXChance == "0" ? firstplayer : secondplayer} won the Game !`)
        }
    }, [gameState])




    const checkWinner = () => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let x of lines) {
            const [a, b, c] = x;
            if (gameState[a] !== null && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
                return gameState[a];
            }
        }
        return false;
    };


    const onUserClicked = (index) => {
        if (gameState[index] !== null) {
            return;
        }
        const copyState = [...gameState];
        copyState[index] = isXChance ? "O" : "X";
        updateGameState(copyState);
        updateIsXChance(!isXChance);

    };

    const clearGame = () => {
        updateGameState(Array(9).fill(null))
    }

    const myStrings = checkWinner();

    return (
        <div className="app-header1">

            <p className="heading1-text">TIC TAC TOE</p>

            <div>
                <h4>{isXChance ? firstplayer : secondplayer} your chance...</h4>
                <div className="row1 juco-center">
                    <Square className="bor-bottom-right" onClick={() => onUserClicked(0)} state={gameState[0]} />
                    <Square className="bor-bottom-right" onClick={() => onUserClicked(1)} state={gameState[1]} />
                    <Square className="bor-bottom" onClick={() => onUserClicked(2)} state={gameState[2]} />
                </div>
                <div className="row1 juco-center">
                    <Square className="bor-bottom-right" onClick={() => onUserClicked(3)} state={gameState[3]} />
                    <Square className="bor-bottom-right" onClick={() => onUserClicked(4)} state={gameState[4]} />
                    <Square className="bor-bottom" onClick={() => onUserClicked(5)} state={gameState[5]} />
                </div>
                <div className="row1 juco-center">
                    <Square className="bor-right" onClick={() => onUserClicked(6)} state={gameState[6]} />
                    <Square className="bor-right" onClick={() => onUserClicked(7)} state={gameState[7]} />
                    <Square onClick={() => onUserClicked(8)} state={gameState[8]} />
                </div>
            </div>
            <button className="clear-button1" onClick={clearGame}>Clear Game</button>

        </div>
    );
}

export default Game;