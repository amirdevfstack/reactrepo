import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
        
      </div>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2' >
        <div className='flex flex-wrap justify-center gap-3 bg-white rounded-3xl p-2'>
        <button onClick={() => setColor("red")} className='outline-none px-4 text-white' style={{backgroundColor: "red"}}>Red</button>
        </div>
        <div className='flex flex-wrap justify-center gap-3 bg-white rounded-3xl p-2'>
        <button onClick={() => setColor("green")} className='outline-none px-4 text-white' style={{backgroundColor: "green"}}>Green</button>
        </div>
        <div className='flex flex-wrap justify-center gap-3 bg-white rounded-3xl p-2'>
        <button onClick={() => setColor("blue")} className='outline-none px-4 text-white' style={{backgroundColor: "blue"}}>Blue</button>
        </div>
      </div>
    </>
  )
}

export default App
