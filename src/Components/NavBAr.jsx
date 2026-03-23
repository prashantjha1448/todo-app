import { Link, useNavigate } from 'react-router-dom'

const NavBAr = ({ notesData, searchData, setsearchData }) => {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/')
  }

  return (
    <div className='text-white px-5 text-xl py-2 rounded-2xl flex justify-between'>
      <h1 className='border-white/20 border flex justify-center py-1 rounded-xl text-amber-400 font-bold capitalize text-2xl w-[12%] hover:text-red-400 cursor-pointer'>
        To-Do App
      </h1>
      <h1 className="text-lg sm:text-xl font-semibold whitespace-nowrap">
        You have <span className="text-yellow-400">{notesData.length}</span> notes
      </h1>
      <div className="w-64">
        <input
          value={searchData}
          onChange={(elem) => setsearchData(elem.target.value)}
          type="search"
          placeholder="Search notes..."
          className="w-full px-4 py-2 rounded-xl bg-gray-800 border border-white/20 outline-none focus:ring-2 focus:ring-yellow-400 transition"
        />
      </div>
      <div className='flex gap-10'>
        <Link to='/deleted' className='bg-gray-800 border border-white/20 text-white px-5 text-lg py-2 rounded-xl cursor-pointer capitalize'>
          Deleted Notes
        </Link>
        <button className='bg-gray-800 border border-white/20 text-white px-5 text-lg py-2 rounded-xl cursor-pointer capitalize'>
          Profile
        </button>
        <button
          onClick={handleLogout}
          className='bg-red-600/20 border border-red-500/30 text-red-400 px-5 text-lg py-2 rounded-xl cursor-pointer capitalize hover:bg-red-600/40'
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default NavBAr