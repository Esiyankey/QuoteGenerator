import { useState } from 'react'
import './App.css'
import { Navbar } from './Navbar'
import { Quote } from './Quote'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Quote/>
    </>
  )
}

export default App
