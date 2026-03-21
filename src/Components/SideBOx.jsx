import React from 'react'

const SideBOx = ({ notesData }) => {
  return (
    <div className="w-full h-full">

     <div className="w-full h-full bg-gray-900/80 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-4 text-white shadow-lg">

        {/* Top Row */}
        <div className="flex items-center justify-between gap-4">

          {/* Notes Count */}
          <h1 className="text-lg sm:text-xl font-semibold whitespace-nowrap">
            You have <span className="text-yellow-400">{notesData.length}</span> notes
          </h1>

          {/* Search Box */}
          <div className="w-64">
            <input
              type="search"
              placeholder="Search notes..."
              className="w-full px-4 py-2 rounded-xl bg-gray-800 border border-white/20 outline-none focus:ring-2 focus:ring-yellow-400 transition"
            />
          </div>

        </div>

      </div>

    </div>
  )
}

export default SideBOx