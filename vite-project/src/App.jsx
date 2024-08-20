import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(1)
 const addValue = () => {
   
  //  console.log(clickvalue++);
if (counter >= 10){
  alert("Value cannot be greater than 10")
}else{
    
  setCounter(counter + 1)
  }
 }

 const removeValue = () => {
  if(counter <= 0){
    alert("Value cannot be less than 0")
  }else{

    setCounter(counter - 1)
  }
 }

  return (
    <>
      <button onClick={addValue}>Add vale</button>
      <button onClick={removeValue}>Remove value</button>
      <p>clicked: {counter}</p>
    </>
  )
}

export default App
