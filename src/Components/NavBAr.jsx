import React from 'react'

const NavBAr = () => {
  return (
    <div
    className=' text-white px-5 text-xl py-2 rounded-2xl flex justify-between ' 
    >
        <h1
        className=' border-white/20 border flex justify-center py-1 rounded-xl text-amber-400 font-bold capitalize text-2xl w-[12%]  hover:text-red-400 cursor-pointer '
        >To-Do App</h1>

        <div
        className='flex gap-10 '
        >
            <button
            className=' bg-gray-800 border border-white/20  text-white  px-5 text-lg py-2 rounded-xl cursor-pointer capitalize'
            >your notes</button>
            <button
            className=' bg-gray-800 border border-white/20  text-white  px-5 text-lg py-2 rounded-xl cursor-pointer capitalize'
            >Deleted Notes</button>

            <button
            className=' bg-gray-800 border border-white/20  text-white  px-5 text-lg py-2 rounded-xl cursor-pointer capitalize'
            >profile</button>
        </div>

    </div>
  )
}

export default NavBAr