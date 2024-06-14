import { useState } from 'react'
import './App.css'
import Square from './components/Square'
import confetti from 'canvas-confetti'
import { turns } from './constants'
import { checkWinner, checkEndGame } from './logic/game'
import { WinnerModal } from './components/WinnerModal'
import { Board } from './components/Board'
import { ResetButton } from './components/ResetButton'

function App () {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(turns.x)
  const [winner, setWinner] = useState(null) // null es que no hay ganador, false es un empate

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(turns.x)
    setWinner(null)
  }

  const updateBoard = (index) => {
    // no actualizar esto si ya tiene algo
    if (board[index] || winner) return
    // actualizar el tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    // Cambiar el turno
    const newTurn = turn === turns.x ? turns.o : turns.x
    setTurn(newTurn)
    // Revisar si hay un ganador
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false) // empate
    }
  }

  return (
    <div className=' w-fit mx-10 my-auto'>
      <h1 className='text-7xl mb-10 font-bold'>Tic-tac-toe</h1>
      <Board updateBoard={updateBoard} board={board} />
      <section className='flex justify-center gap-x-4 mt-10'>
        <Square isSelected={turn === turns.x} styleInitial='w-20 h-20 rounded-lg' styleSelected='w-20 h-20 rounded-lg bg-orange-700'>{turns.x}</Square>
        <Square isSelected={turn === turns.o} styleInitial='w-20 h-20 rounded-lg' styleSelected='w-20 h-20 rounded-lg bg-purple-900'>{turns.o}</Square>
      </section>
      <WinnerModal resetGame={resetGame} winner={winner} />
      <div className='flex justify-center'>
        <ResetButton resetGame={resetGame} />
      </div>
    </div>
  )
}

export default App
