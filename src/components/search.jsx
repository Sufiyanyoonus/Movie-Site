import React from 'react'

const Search = ({search,setsearch}) => {
  return (
    <div className='search w-full'>
      <div className='flex   items-center justify-center  ' >
        <img src="/Vector.svg" alt="" />
        <input   className="bg-transparent w- text-white placeholder-gray-400 outline-none ml-3 w-100" type="text"
         placeholder='Search through your favourite movies'
         value={search}
         onChange={(event)=>setsearch(event.target.value)}  />
      </div>
    </div>
  )
} 

export default Search
