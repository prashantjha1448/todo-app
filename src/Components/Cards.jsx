import React from 'react'

const Cards = ({data, deleteNote,  editNote, idx}) => {
  return (
    <div className='flex flex-col bg-white/10 backdrop-blur-md border border-white/20 w-full h-64  rounded-2xl px-5 py-5 relative ' >
        <h1
        className='text-2xl font-extrabold capitalize'
        >{data.work}</h1>
        <p>{data.discriptions}</p>

        <div 
        className='flex gap-20 absolute bottom-9  '>
          <button
          onClick={()=>deleteNote(idx)}
          className='  backdrop-blur-md border border-white/20 text-red-600 px-4 py-2 rounded-xl font-semibold text-xl active:scale-95 cursor-pointer'
          >Delete</button>

          <button
          onClick={()=>editNote(idx)}
          className='backdrop-blur-md border border-white/20  text-green-500 px-8 py-2 rounded-xl font-semibold text-xl active:scale-95 cursor-pointer'
          >Edit</button>
        </div>
        
    </div>
  )
}

export default Cards