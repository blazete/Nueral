import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [board,setBoard] = useState(Array(9).fill(null));
  const [isNext,setIsNext] = useState(true);
  const handleClick = (index)=>{
    if(board[index] ||calculateWinner(board)) return
    const newBoard = board.slice();
    setBoard(newBoard)
    setIsNext(!isNext)
  }
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    for(let i = 0; i <lines.length; i++){
      const [a,b,c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
        return squares[a]
      }
    }
    return null
  }
  const winner = calculateWinner(board);
  const status = winner ? `Winner : ${winner}` : `next player : ${isNext ? `x` : `O`}`
  const renderSquare = (index) =>{
    return (
    <button className='btn' onClick={()=>handleClick(index)}>{board[index]}</button>)
  }
  return (
    <div className='container'> 
    <h1 className='header'>Tick-Tack-Toe</h1>
    <div className='game-container'>
      <div className='status'>{status}</div>
      <div className='row1'>
        {renderSquare(1)}
        {renderSquare(2)}
        {renderSquare(3)}
      </div>
      <div className='row2'>
        {renderSquare(4)}
        {renderSquare(5)}
        {renderSquare(6)}
      </div>
      <div className='row3'>
        {renderSquare(7)}
        {renderSquare(8)}
        {renderSquare(9)}
      </div>
      </div>
    <button className='footer'>Reset</button>
    </div>
  );
}

export default App;
