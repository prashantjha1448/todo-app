// ✅ Fixed: import paths — Home.jsx is inside Components folder
import Cards from './Components/Cards'
import InputBox from './Components/InputBox'
import NavBAr from './Components/NavBAr'
import useNotes from './hooks/useNotes'

const Home = () => {
    const { notesData, workData, discriptionsData, handleInputData, handleDiscriptionsData, addNotes, deleteNote, editNote, filteredNotes, searchData, setsearchData } = useNotes()

    return (
        <div className='bg-gray-900 min-h-screen p-5 sm:p-10 flex flex-col gap-10 text-white'>
            <NavBAr notesData={notesData} searchData={searchData} setsearchData={setsearchData} />

            {/* ✅ Fixed: removed broken w-[35%] constraint, InputBox now full-width on small, sensible on large */}
            <div className='w-full sm:w-[60%] md:w-[45%] lg:w-[35%]'>
                <InputBox
                    workData={workData}
                    discriptionsData={discriptionsData}
                    handleInputData={handleInputData}
                    handleDiscriptionsData={handleDiscriptionsData}
                    addNotes={addNotes}
                />
            </div>

            <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {/* ✅ Fixed: use item._id as key instead of idx */}
                {filteredNotes.map((item) => (
                    <Cards
                        data={item}
                        key={item._id}
                        deleteNote={deleteNote}
                        editNote={editNote}
                    />
                ))}
            </div>
        </div>
    )
}

export default Home
