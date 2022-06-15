import React from 'react'
import './App.css'
import Home from './components/Home'
import { Flip, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
function App() {
  return (
    <div className='App'>
      <ToastContainer autoClose={1000} transition={Flip} />
      <Home />
    </div>
  )
}

export default App
