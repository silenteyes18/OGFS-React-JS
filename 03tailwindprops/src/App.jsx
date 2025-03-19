import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  const details = {
    name: "LoliRita",
    job: "Frontend developer"
  }

  const arr = ["raju", "Seedless"]

  return (
    <>
      <h1 className='text-3xl font-bold underline italic text-red-300'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </h1>
      <Card name={ "Lolita"}/><br/>
      <Card arr={arr}/><br/>
      <Card name = {details.name} job = {details.job}/>
    </>
  )
}

export default App
