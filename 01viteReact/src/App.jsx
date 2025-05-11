import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {

  let [counter, setCounter] = useState(0);

  const addVal = ()=>{
   setCounter(prev => (prev < 20 ? prev+1 : 20)) 
  }

  const subVal = ()=>{
    setCounter(prev=>(prev > 0 ? prev - 1 : 0) )
  }

  return (
    <>
      <h2>Hi, Your Final Value is: {counter}</h2>
      <button onClick={addVal}>Add Value</button>
      <button onClick={subVal}>Sub Value</button>
    </>
  )
}

export default App
