import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const emptyBoard = Array(9).fill("");

  const [board, setBoard] = useState(emptyBoard);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState();

  const handleCellClick = (index) => {
    if(winner) return null;

    if(board[index] !== ""){
      alert("Deixe de roubo!");
      return null;
    }

    setBoard(board.map((item, itemIndex) => itemIndex === index ? currentPlayer : item));

    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  }

  const checkWinner = () => {
    const possibleWin = [
      [board[0], board[1], board[2]],
      [board[3], board[4], board[5]],
      [board[6], board[7], board[8]],
      [board[0], board[3], board[6]],
      [board[1], board[4], board[7]],
      [board[2], board[5], board[8]],
      [board[0], board[4], board[8]],
      [board[2], board[4], board[6]],
    ];

    possibleWin.forEach(cells => {
      if(cells.every(cell => cell === "O")) {
        setWinner("O");
      }

      if(cells.every(cell => cell === "X")){
        setWinner("X");
      }
    });

    if(winner === "X" | winner === "O") return null;

    checkDraw();
  }

  const checkDraw = () => {
    if(board.every(item => item !== "")) {
      setWinner("E");
    };
  }

  useEffect(checkWinner, [board]);

  const resetGame = () => {
    setCurrentPlayer("X");
    setBoard(emptyBoard);
    setWinner(null);
  }

  return (
    <main>
      <h1 className='title'>Jogo da Velha</h1>

      <div className={`board ${winner ? "game-over" : ""}`}>
        {board.map((item, index) => (
          <div
            key={index} 
            className={`cell ${item}`}
            onClick={() => handleCellClick(index)}
          >
            {item}
          </div>
        ))}
      </div>
      
      <br></br>
      { winner &&
        <footer>
          {winner === "E" ? 
            <h2 className='winner-message'>
              Empate!
            </h2>
          :   
            <h2 className='winner-message'>
              O jogador <span className={winner}>{winner}</span> venceu!
            </h2>
          }
          <br></br>
          <button onClick={resetGame}>Recomeçar jogo</button>
        </footer>
}
    </main>
  );
}

export default App;
