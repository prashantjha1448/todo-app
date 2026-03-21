
import Cards from './Components/Cards'
import InputBox from './Components/InputBox'
import SideBOx from './Components/SideBOx'
import NavBAr from './Components/NavBAr'
import useNotes from './hooks/useNotes'


const App = () => {
  const { notesData, workData, discriptionsData, handleInputData, handleDiscriptionsData, addNotes, deleteNote } = useNotes()



  return (
    <div className='bg-gray-900 min-h-screen p-5 sm:p-10 flex flex-col gap-10'>
      <NavBAr />
      <div
        className='flex'
      >
        <InputBox
          workData={workData}
          discriptionsData={discriptionsData}
          handleInputData={handleInputData}
          handleDiscriptionsData={handleDiscriptionsData}
          addNotes={addNotes}
        />
        <SideBOx
          notesData={notesData}
        />
      </div>

      {/* CARDS SECTION */}
      <div className='grid gap-6 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-4'>

        {notesData.map((item, idx) => {
          return <Cards
            data={item}
            key={idx}
            deleteNote={deleteNote}
            idx={idx}
          />
        })}

      </div>

    </div>
  )
}

export default App