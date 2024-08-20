import { useState, useCallback, useEffect, useRef } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  //refhook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() =>{
    let pass = ""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str+="0123456789"
    if (charAllowed) str+="!@#$%^&*()_+"

    for (let i = 1; i < length; i++) {
    let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    } 
setPassword(pass)
  },[length, numberAllowed, charAllowed, setPassword])
  

  const copypasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 9)
    window.navigator.clipboard.writeText(password)
   
  }, [password])


    useEffect(() => {
      passwordGenerator()
    }, [length, numberAllowed, charAllowed, passwordGenerator])
  
    return (
    <>
    <div className='w-full mx-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-800 bg-gray-700'>
      <h1 className='text-2xl text-center'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text"
          value={password}
          className='outline-none py-1 w-full px-3'
          placeholder='Password'
          readOnly
          ref={passwordRef}
        />
        <button
        onClick={copypasswordToClipboard}
        className='outline-none px-3 bg-orange-800 text-white'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2 '>
        <div className='flex items-center gap-x-1'>
          <input type="range"
          min={8}
          max={20}
          value={length}
          className='cursor-pointer'
          onChange={(e) => setLength(e.target.value)}
          />
          <label htmlFor="">length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={numberAllowed}
          id='numberAllowed'
          onChange ={()=>{
            setNumberAllowed(prev => !prev);
          }}
          />
          <label htmlFor="numberAllowed">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={charAllowed}
          id='charAllowed'
          onChange ={()=>{
            setCharAllowed(prev => !prev);
          }}
          />
          <label htmlFor="charAllowed">Characters</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
