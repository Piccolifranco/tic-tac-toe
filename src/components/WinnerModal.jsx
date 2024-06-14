import { ResetButton } from './ResetButton'

export const WinnerModal = ({ winner, resetGame }) => {
  if (winner === null) return null

  const winnerText = winner === false ? 'empate' : 'Ganador'

  return (

    <section className='absolute w-screen h-screen top-0 left-0 grid place-items-center bg-black'>
      <div className=' bg-gradient-to-tr from-violet-600 to-orange-500 h-[300px] w-80 border-2 rounded-lg flex flex-col content-between items-center gap-5'>
        <h2 className='text-3xl font-bold pt-3'>
          {winnerText}
        </h2>

        <header className='flex pt-10'>
          {winner &&
            <div className='text-5xl pointer-events-none'>{winner}</div>}
        </header>
        <footer>
          <ResetButton resetGame={resetGame} />
        </footer>
      </div>
    </section>
  )
}
