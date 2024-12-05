"use client"
import React, { useState } from 'react'
import Board from './components/board'
import { Player } from './components/types/type'

const  TicTacToe = () => {
const [board,setBoard]=useState<Player[]>(Array(9).fill(null));
const [currentPlayer,setCurrentPlayer]=useState<Player>("x");
const [winner,setWinner]=useState<Player>(null);
const handelclick= (index:number)=>
{
    if(board[index]||winner) return;
    const updatedboard= board.slice();
    updatedboard[index]= currentPlayer;
    setBoard(updatedboard);
    console.log(updatedboard);
    checkWinner(updatedboard);
    setCurrentPlayer(currentPlayer==="x"? "0":"x");

};
const checkWinner = (board: Player[]) => {
    const winningCombinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];

    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
  if (board[a] && board[a]===board[b] && board[b]===board[c] ){
  
    setWinner(board[a]);
    return;
  }
  }
  if (!board.includes(null)) setWinner("draw");
  }
const resetGame =()=>
{
    setBoard(Array(9).fill(null));
    setCurrentPlayer("x");
    setWinner(null);
}
  return (
    <>
    <div
      // style={{
      //   backgroundImage: 'url(/images/4.jpg)',
      //   backgroundSize: 'cover',
      //   backgroundPosition: 'center',
      //   height: '100vh',
      // }}
    >
    <div className="container flex flex-col justify-center items-center space-y-5">
      <h1 className="text-4xl font-bold text-[#914a2c] ">Tic Tac Toe</h1>
      <Board board={board} onClick={handelclick} />
      {winner && <p className="mt-4 text-lg font-semibold">{winner === "draw" ? "It's a draw!" : `${winner} wins!`}</p>}
    <button className="rounded-md p-2 border border-black bg-[#914a2c] text-[#f59542] font-semibold text-xl" onClick={resetGame}>Reset</button>
    </div></div>
  </>
  
  );
}
export default TicTacToe;
