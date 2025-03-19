import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [password, setPassword] = useState('')
  const [length, setLength] = useState(8)
  const [isNumber, setIsNumber] = useState(false)
  const [isSpecialChar, setIsSpecialChar] = useState(false)

  const generatePassword = useCallback(() => {
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if (isNumber) str += '0123456789';// append
    if (isSpecialChar) str += '~!@#$%^&*()+';// append
    let pass = ''

    for (let i=0; i < length; i++){
      const char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }
    setPassword(pass)
  },[isNumber,isSpecialChar,length])

  useEffect(() => {
    generatePassword()
  },[isNumber,isSpecialChar,length])

  const passwordReferense = useRef(null)

  const copyPassToClipBoard = () => {
    window.navigator.clipboard.writeText(password);// to copy to clipboard
    passwordReferense.current.select()
  }
  

  return (
    <>
      <div className='w-full h-screen flex flex-col justify-top items-center p-20'>
        <h1 className='font-bold text-center font-sans text-[28px] text-yellow-200'>
          Password Generator
        </h1>
        <div className='flex flex-row p-8 w-full justify-center'>
          <input type="text" value={password} readOnly placeholder='Password' className='text-xl w-[400px] h-10 rounded-l-lg px-2 border-none focus:outline-none' ref={passwordReferense}/>
          <button className='px-[14px] bg-blue-600 font-bold  rounded-r-lg text-xl cursor-pointer' onClick={copyPassToClipBoard}>copy</button>
        </div>
        <div className='flex  gap-4'>
          <div>
            <input type="range" min="8" max="100" value={length} onChange={(e) => setLength(e.target.value)} placeholder="" className='cursor-pointer '/><br></br>
            <label htmlFor="length" className='px-1 text-orange-400 '>Length: {length}</label>
          </div>
          <div>
            <input type="checkbox" defaultChecked={isNumber} onChange={() => setIsNumber((prev) => !prev)} />
            <label htmlFor="isNumber" className='px-1 text-orange-400 '>Number</label>
          </div>
          <div>
            <input type="checkbox" defaultChecked={isSpecialChar} onChange={() => setIsSpecialChar((prev) => !prev)} />
            <label htmlFor="isSpecialChar" className='px-1 text-orange-400 '>Special Char</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
