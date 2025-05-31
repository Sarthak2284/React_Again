import { useRef, useState } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';
import './App.css'

function App() {
 const [length, setLength] = useState(6);
 const [number, setNumber] = useState(false);
 const[characters, setCharacters] = useState(false);
 const[password, setPassword] = useState("");
 const[copy, setCopy] = useState(false);


const passwordRef = useRef(null);
const passwordGenerator = useCallback(()=>{
  let pass = "";
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  if(number) str += "0123456789"
  if(characters) str += "~`!@#$%^&*()-_+={}[]/|.><,?:;";

  for (let i = 0; i < length; i++) {
    let char = Math.floor(Math.random() * str.length + 1)

    pass += str.charAt(char);

  }

  setPassword(pass);
  setCopy(false);
}, [length,number, characters, setPassword])

const copyToClipboard=()=>{
  window.navigator.clipboard.writeText(password);
  setCopy((prev)=>!prev)
}

useEffect(()=>{
  passwordGenerator()
},[length, number, characters,passwordGenerator])
    

return (
  <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-6 my-8 text-orange-500 bg-gray-800'>
  <h1 className='text-white text-center text-2xl font-semibold mb-4'>
    Password Generator
  </h1>

  <div className='flex shadow rounded-lg overflow-hidden mb-4'>
    <input
      type="text"
      value={password}
      className='bg-stone-50 outline-none w-full py-2 px-3 text-black'
      placeholder='Password...'
      readOnly
    />
    <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 cursor-pointer' onClick={copyToClipboard}>
      {copy? 'Copied':'Copy'}
    </button>
  </div>
  <div className='flex text-sm gap-x-2'>
    <div className='flex items-center gap-x-1 '>
        <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}}/>
        <label >Length: {length}</label>
    </div>
    <div className='flex items-center gap-x-1 '> 
      <input 
      type="checkbox" 
      defaultChecked = {number}
      id='numberInput'
      onChange={()=>{
        setNumber((prev)=> !prev);
      }}
      />
      <label htmlFor='numberInput'>Numbers:</label>
    </div>
    <div className='flex items-center gap-x-1 '> 
      <input 
      type="checkbox" 
      defaultChecked = {characters}
      id='charInput'
      onChange={()=>{
        setCharacters((prev)=> !prev);
      }}
      />
      <label htmlFor='charInput'>Characters:</label>
    </div>
      
     </div>
</div>


</>
  )
  
}

export default App
