import { useState, useReact } from "react";
import NavButon from "../nav/navbutton";
import Board from "./Board.jsx";
import Grid from "@mui/material/Unstable_Grid2";

export default function TicTacToe() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setXIsNext(!xIsNext);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
    setXIsNext(nextMove % 2 === 0);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <>
      <NavButon></NavButon>
      <Grid container className="game" spacing={1} justifyContent="center" alignItems="center">
        <Grid className="game-borad" xs={7}>
          <Board
            xIsNext={xIsNext}
            squares={currentSquares}
            onPlay={handlePlay}
          />
        </Grid>
        <Grid  className="game-info" xs={5}>
          <ol style={{width:"30vw"}}>{moves}</ol>
        </Grid>
      </Grid>
    </>
  );
}
