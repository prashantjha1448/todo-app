import React from 'react'
import useNotes from '../hooks/useNotes'
import NavBAr from './NavBAr'

const DeletedNotes = () => {
    const { deletedNotes, permanentDelete, restoreNote } = useNotes()

    return (
        <div className='bg-gray-900 min-h-screen p-5 sm:p-10 flex flex-col gap-10 text-white'>
            <h1 className='text-3xl font-bold text-center text-red-400'>🗑️ Deleted Notes</h1>

            {deletedNotes.length === 0 ? (
                <p className='text-center text-gray-400 text-lg mt-20'>No deleted notes found.</p>
            ) : (
                <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                    {deletedNotes.map((item) => (
                        // ✅ Fixed: use item._id as key instead of idx
                        <div key={item._id} className='flex flex-col bg-white/10 backdrop-blur-md border border-white/20 w-full h-64 rounded-2xl px-5 py-5 relative'>
                            {/* ✅ Fixed: item.title instead of items.work */}
                            <h1 className='text-2xl font-extrabold capitalize'>{item.title}</h1>
                            {/* ✅ Fixed: item.description instead of items.discriptions */}
                            <p className='text-gray-300 mt-2 text-sm'>{item.description}</p>
                            <div className='flex gap-4 absolute bottom-5'>
                                {/* ✅ Fixed: added onClick handlers */}
                                <button
                                    onClick={() => permanentDelete(item._id)}
                                    className='backdrop-blur-md border border-white/20 text-red-500 px-3 py-2 rounded-xl font-semibold text-sm active:scale-95 cursor-pointer hover:bg-red-500/20'
                                >
                                    Delete Forever
                                </button>
                                <button
                                    onClick={() => restoreNote(item._id)}
                                    className='backdrop-blur-md border border-white/20 text-green-400 px-4 py-2 rounded-xl font-semibold text-sm active:scale-95 cursor-pointer hover:bg-green-500/20'
                                >
                                    Restore
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default DeletedNotes
