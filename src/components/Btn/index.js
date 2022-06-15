import React from 'react'
import './Btn.scss'
function Btn({ children, onClick, style, isDisabled }) {
  return (
    <button className='btn-custom' disabled={isDisabled} onClick={onClick}>
      {children}
    </button>
  )
}

export default Btn
