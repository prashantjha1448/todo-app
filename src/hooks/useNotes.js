import { useState } from 'react'

const useNotes = () => {
  const [notesData, setnotesData] = useState([])
  const [workData, setWorkData] = useState("")
  const [discriptionsData, setDiscriptionsData] = useState("")

  const [editIdx, setEditIdx] = useState(null)

  let addNotes = (e) => {
    e.preventDefault()
    if (!workData || !discriptionsData) return
    setnotesData([...notesData, { work: workData, discriptions: discriptionsData }])
    setWorkData('')
    setDiscriptionsData('')
  }

  // Yeh dono add karo
let handleInputData = (e) => {
  setWorkData(e.target.value)
}

let handleDiscriptionsData = (e) => {
  setDiscriptionsData(e.target.value)
}

  let deleteNote = (idx) => {
  const updatedNotesBydelete = notesData.filter((elem, i) => i !== idx)
  setnotesData(updatedNotesBydelete)
}

let editNote = (idx) => {
  setWorkData(notesData[idx].work)
  setDiscriptionsData(notesData[idx].discriptions)
  setEditIdx(idx)
}

  return { notesData, workData, discriptionsData, handleInputData, handleDiscriptionsData, addNotes,
     deleteNote  , editNote

  }
}

export default useNotes