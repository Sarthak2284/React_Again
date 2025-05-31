import { useState } from "react"

function App() {

  const [weight, setWeight] = useState(0)
  const [height, setheight] = useState(0)
  const [bmi, setBmi] = useState();
  const [message, setMessage] = useState('')

  // logic

  const calBMI = (e)=>{
    
    e.preventDefault();
    if(weight <=0 || height <=0 ) 
      alert('Enter valid credentials....');
    else{
      let bmi = Math.floor(weight / ((height / 100) ** 2));
      setBmi(bmi);
      
      if (bmi < 18) setMessage('You are Underweight');
      else if (bmi >= 18 && bmi < 25) setMessage('You are Healthy');
      else if (bmi >= 25 && bmi < 30) setMessage('You are Overweight');
      else setMessage('You are Obese');

    } 

    
  }


  const handleReset = () => {
  setWeight(0);
  setheight(0);
  setBmi(0);
  setMessage('');
};


  return (
    <>
    <div className="w-full h-full">

      <div className=" mx-auto my-50 w-1/4 h-auto shadow-2xl rounded-lg">
        <h2 className="text-center text-4xl">
          BMI Calculator
        </h2>
          <form onSubmit={calBMI}>
            <div className="flex flex-col mx-10">
              <label htmlFor="Weight" className="mt-5">Weight(kg)</label>
              <input 
              type="text" 
              placeholder="Enter weight...."
              className="h-10 px-4 outline-2 rounded-4xl mt-3 text-lg"
              value={weight}
              onChange={(e)=> setWeight(e.target.value)}
              />
            </div>

            <div className="flex flex-col mx-10">
              <label htmlFor="Height" className="mt-5">Height(cm)</label>
              <input 
              type="text" 
              className="h-10 px-4 outline-2 mt-5 rounded-2xl"
              placeholder="Enter height...."
              value={height}
              onChange={(e)=>setheight(e.target.value)}
              />
            </div>
            <div className="flex flex-row">
              <button className="w-1/4 h-10 outline-1 rounded-2xl hover:bg-gray-100 hover:cursor-pointer mx-auto items-center mt-5" type="submit">Submit </button>
              <button className="w-1/4 h-10 outline-1 rounded-2xl hover:bg-gray-100 hover:cursor-pointer mx-auto items-center mt-5 mb-5" type="button" onClick={handleReset}>Reset</button>
            </div>
            <h2 className="text-xl text-center ">Your BMI is: {bmi}</h2>
            <p className="text-center text-lime-500">{message}</p>
            </form>
      </div>
    </div>
    
    </>
  )
}

export default App
