import React from 'react'
import './Btn.scss'
function Btn({ children, onClick, style }) {
  return (
    <button className='btn-custom' onClick={onClick}>
      {children}
    </button>
  )
}

export default Btn
