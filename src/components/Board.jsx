import Square from './Square'

export const Board = ({ updateBoard, board }) => {
  return (
    <section className='grid grid-cols-3 gap-3'>

      {board.map((square, index) =>
        (
          <Square
            updateBoard={updateBoard}
            key={index}
            index={index}
          >
            {square}
          </Square>
        )
      )}
    </section>

  )
}
