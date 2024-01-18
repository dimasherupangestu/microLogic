import { useState } from "react";

function Square({ value, onSquaresClick }) {
  return (
    <button className="square " onClick={onSquaresClick}>
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  function hendelClik(i) {
    if (squares[i] || calcuWiner(squares)) return;
    const nextSquares = squares.slice();
    nextSquares[i] = "X";
    nextSquares[i] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  }
  const winer = calcuWiner(squares);
  let status = "";
  if (winer) {
    status = "Winer" + winer;
  } else {
    status = "Next Player" + (xIsNext ? "X" : "O");
  }
  console.log(winer);
  console.log(status);
  return (
    <>
      <div className="status text-2xl font-bold">{status}</div>
      <div className="board mx-auto shadow-lg text-white  bg-green-500">
        <Square value={squares[0]} onSquaresClick={() => hendelClik(0)} />
        <Square value={squares[1]} onSquaresClick={() => hendelClik(1)} />
        <Square value={squares[2]} onSquaresClick={() => hendelClik(2)} />
        <Square value={squares[3]} onSquaresClick={() => hendelClik(3)} />
        <Square value={squares[4]} onSquaresClick={() => hendelClik(4)} />
        <Square value={squares[5]} onSquaresClick={() => hendelClik(5)} />
        <Square value={squares[6]} onSquaresClick={() => hendelClik(6)} />
        <Square value={squares[7]} onSquaresClick={() => hendelClik(7)} />
        <Square value={squares[8]} onSquaresClick={() => hendelClik(8)} />
      </div>
    </>
  );
}
export const TicTacTo = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];

  function jumTo(nextMove) {
    setCurrentMove(nextMove);
    setXIsNext(nextMove % 2 === 0);
  }
  function hendelPlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setXIsNext(!xIsNext);
  }
  const move = history.map((squares, move) => {
    let description = "";
    if (move > 0) {
      description = "Go to move # " + move;
    } else {
      description = "Go to Start #";
    }
    return (
      <li key={move}>
        <button
          className="bg-slate-900 px-4 py-2 mx-3 text-slate-100 rounded-md my-1"
          onClick={() => jumTo(move)}
        >
          {description}
        </button>
      </li>
    );
  });
  return (
    <div className="game flex w-80 justify-center h-72">
      <div className="game-board  ">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={hendelPlay} />
      </div>
      <div className="game-info bgor">
        <ol>{move}</ol>
      </div>
    </div>
  );
};
function calcuWiner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[c]) {
      return squares[a];
    }
  }
  return false;
}
