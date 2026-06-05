import { useState } from 'react'

import './App.css'
import Search from './components/search'


function App() {
  const [search, setsearch] = useState('')



  return (
    <main>


      <div className='pattern' />
      <div className='wrapper' />
      <header className='flex flex-col items-center justify-center '>
        <img src="/hero-img.png" alt="" />
        <h2 className='font-sans text-7xl font-bold size-56px text-white text-center'>Find
          <span className="bg-linear-to-r from-[#D6C7FF] to-[#AB8BFF] bg-clip-text text-transparent">Movies </span>
          You'll  Love
          <br />
          Without The Hassle
        </h2>
              <Search  search={search} setsearch={setsearch}/>
      </header>
    
    </main>

  )
}

export default App
