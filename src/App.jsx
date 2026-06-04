import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  return (
    
      <h2 className='font-sans text-7xl font-bold size-56px text-white'>Find <span className="bg-linear-to-r from-[#D6C7FF] to-[#AB8BFF] bg-clip-text text-transparent">Movies </span> That You Will Love Without The Hassle</h2>
  )
}

export default App
