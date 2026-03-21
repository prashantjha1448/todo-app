import React from 'react'

const InputBox = ({workData , discriptionsData , handleInputData , handleDiscriptionsData , addNotes}) => {
  return <div 
  className='flex flex-col lg:flex-row gap-6'>

        {/* FORM */}
        <div className='w-full lg:w-1/3 bg-gray-800 border border-white/20 rounded-2xl p-6 shadow-lg'>
          <form
            className='flex flex-col gap-4 text-white'
            onSubmit={addNotes}
          >

            <input
              className='outline-none border border-white/20 rounded-lg px-4 py-2 bg-gray-900'
              value={workData}
              onChange={handleInputData}
              type="text"
              placeholder='Enter your work...'
            />

            <textarea
              className='outline-none border border-white/20 rounded-lg px-4 py-3 bg-gray-900 resize-none'
              value={discriptionsData}
              onChange={handleDiscriptionsData}
              placeholder='Enter description...'
            />

            <button className='bg-blue-500 hover:bg-blue-600 transition text-white text-lg font-semibold py-2 rounded-lg active:scale-95'>
              Add Note
            </button>

          </form>
        </div>

        
        

      </div>
}

export default InputBox