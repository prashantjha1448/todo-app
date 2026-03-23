import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './Home'
import DeletedNotes from './Components/DeletedNotes'
import Login from './Components/Login'
import Register from './Components/Register'

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token')
  return token ? children : <Navigate to='/' />
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/home' element={
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      } />
      <Route path='/deleted' element={
        <ProtectedRoute>
          <DeletedNotes />
        </ProtectedRoute>
      } />
    </Routes>
  )
}

export default App