import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  return (
    <>
      <h1 className='bg-amber-200 text-black p-4 rounded-2xl mb-4'>Lecture 3:- Tailwind + Props</h1>
      <div className='flex flex-col md:flex-row flex-wrap justify-center items-center gap-4'>
        <Card username='Sarthak' role='Team Head' imgLink={"https://images.pexels.com/photos/997512/pexels-photo-997512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}/>
        <Card username='Kabir' role='CEO' imgLink={"https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}/>
      </div>


    </>
  )
}

export default App
