import { WINNER_COMBOS } from '../constants'

export const checkWinner = (boardToCheack) => {
  // Revisamos todas las combinaciones ganadoras
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo
    if (boardToCheack[a] &&
        boardToCheack[a] === boardToCheack[b] &&
         boardToCheack[a] === boardToCheack[c]) {
      return boardToCheack[a]
    }
  }
  // Si no hay ganador
  return null
}

export const checkEndGame = (newBoard) => {
  // Revisamos que haya un empate si no hay mas espacios vacios
  return newBoard.every((square) => square !== null)
}
