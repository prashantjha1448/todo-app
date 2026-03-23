import { useState, useEffect } from 'react'
import axios from 'axios'

const useNotes = () => {
  const [notesData, setnotesData] = useState([])
  const [workData, setWorkData] = useState("")
  const [discriptionsData, setDiscriptionsData] = useState("")
  const [editIdx, setEditIdx] = useState(null)
  const [editId, setEditId] = useState(null)
  const [searchData, setsearchData] = useState("")
  const [deletedNotes, setDeletedNotes] = useState([])

  const token = localStorage.getItem('token')

  const headers = {
    Authorization: `Bearer ${token}`
  }

  // Notes fetch karo
  useEffect(() => {
    fetchNotes()
  }, [])

  const fetchNotes = async () => {
    try {
      const res = await axios.get('http://localhost:8000/api/getallNotes', { headers })
      setnotesData(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  let handleInputData = (e) => {
    setWorkData(e.target.value)
  }

  let handleDiscriptionsData = (e) => {
    setDiscriptionsData(e.target.value)
  }

  let deleteNote = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/deleted/${id}`, { headers })
      setDeletedNotes([...deletedNotes, notesData.find(n => n._id === id)])
      setnotesData(notesData.filter(n => n._id !== id))
    } catch (error) {
      console.log(error)
    }
  }

  let editNote = (id, item) => {
    setWorkData(item.title)
    setDiscriptionsData(item.description)
    setEditIdx(id)
    setEditId(id)
  }

  let addNotes = async (e) => {
    e.preventDefault()
    if (!workData || !discriptionsData) return

    try {
      if (editId !== null) {
        // Edit mode — DB update
        const res = await axios.put(`http://localhost:8000/api/update/${editId}`, {
          title: workData,
          description: discriptionsData
        }, { headers })
        setnotesData(notesData.map(n => n._id === editId ? res.data : n))
        setEditId(null)
        setEditIdx(null)
      } else {
        // Add mode — DB mein save
        const res = await axios.post('http://localhost:8000/api/createNotes', {
          title: workData,
          description: discriptionsData,
          user: JSON.parse(atob(token.split('.')[1])).id
        }, { headers })
        setnotesData([...notesData, res.data])
      }
      setWorkData('')
      setDiscriptionsData('')
    } catch (error) {
      console.log(error)
    }
  }

  const filteredNotes = notesData.filter((items) =>
    items.title?.toLowerCase().includes(searchData.toLowerCase())
  )

  return {
    notesData, workData, discriptionsData, handleInputData,
    handleDiscriptionsData, addNotes, deleteNote, editNote,
    filteredNotes, searchData, setsearchData, deletedNotes, setDeletedNotes
  }
}

export default useNotes