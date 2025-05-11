import React from 'react'
import { useState } from 'react'
import Card from './Card'
function Bodybg({children}) {
    const [color, setColor] = useState("")
  return (
    <div>
    <div  className="w-full h-screen duration-200 "
      style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-4 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-amber-200 px-3 py-2 rounded-2xl'>
          <button
            className='outline-none px-4 py-1 rounded-full text-black shadow-2xl cursor-pointer'
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
          >Red</button>

          <button
            className='outline-none px-4 py-1 rounded-full text-black shadow-2xl cursor-pointer'
            style={{ backgroundColor: "green" }}
            onClick={() => setColor("green")}
          >Green</button>

          <button
           className='outline-none px-4 py-1 rounded-full text-black shadow-2xl cursor-pointer'
            style={{ backgroundColor: "blue" }}
            onClick={() => setColor("blue")}
          >Blue</button>

          <button
          className='outline-none px-4 py-1 rounded-full text-black shadow-2xl cursor-pointer'
            style={{ backgroundColor: "yellow" }}
            onClick={() => setColor("yellow")}
          >Yellow</button>

          <button
           className='outline-none px-4 py-1 rounded-full text-black shadow-2xl cursor-pointer'
            style={{ backgroundColor: "orange" }}
            onClick={() => setColor("orange")}
          >Orange</button>

           <button
           className='outline-none px-4 py-1 rounded-full text-black shadow-2xl cursor-pointer'
            style={{ backgroundColor: "violet" }}
            onClick={() => setColor("violet")}
          >Violet</button>

           <button
           className='outline-none px-4 py-1 rounded-full text-black shadow-2xl cursor-pointer'
            style={{ backgroundColor: "indigo" }}
            onClick={() => setColor("indigo")}
          >Indigo</button>
        </div>
      </div>
      {children}
    </div>
    </div>
  )
}

export default Bodybg
