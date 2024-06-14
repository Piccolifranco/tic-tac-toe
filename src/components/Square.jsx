import React from 'react'

const Square = ({ children, updateBoard, index, isSelected, styleInitial, styleSelected }) => {
  const handleClick = () => {
    updateBoard(index)
  }
  return (
    <div onClick={handleClick} className={`w-24 h-24 rounded border-2 border-solid border-white grid place-items-center cursor-pointer text-white text-5xl ${isSelected ? styleSelected : styleInitial}`}>
      {children}
    </div>
  )
}

export default Square
