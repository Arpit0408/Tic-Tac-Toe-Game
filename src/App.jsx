import { useState } from 'react'
import Board from './Container/board'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <h1>Hello Arpit</h1> */}
    <Board/>
    </>
  )
}

export default App
