import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  return (
    <>
    <div className='w-100% h-screen' style={{backgroundColor: color}}>
      <h1 className='font-bold text-center font-sans text-[28px]'>BG Changer</h1>
      <div className='fixed flex flex-wrap justify-center ali bottom-12 w-full gap-3'>
        <div className='bg-zinc-800 p-2 rounded-full'>
        <button className='bg-red-500  px-4 py-2 rounded-full' onClick={() => setColor("red")}>Red</button>
        <button className='bg-yellow-500  px-4 py-2 rounded-full' onClick={() => setColor("yellow")}>Yellow</button>
        <button className='bg-green-500  px-4 py-2 rounded-full' onClick={() => setColor("green")}>Green</button>
        <button className='bg-pink-500  px-4 py-2 rounded-full' onClick={() => setColor("pink")}>Pink</button>
        <button className='bg-blue-500  px-4 py-2 rounded-full' onClick={() => setColor("blue")}>Blue</button>
      </div>
      </div>
    </div>
    </>
  )
}

export default App
