import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Form from './components/Form'
import Edit from './components/Edit'
import Notes from './components/Notes'

export default function App() {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [notes, setNotes] = useState(getNotesFromLs)
  const [editId, seteditId] = useState("")
  localStorage.setItem("notes", JSON.stringify(notes))
  return (
    <div>
      <Edit editId={editId} notes={notes} setNotes={setNotes} />
      <Navbar />
      <Form title={title} setTitle={setTitle} desc={desc} setDesc={setDesc} notes={notes} setNotes={setNotes} />
      <div className="container">
        <div className="row justify-containt-center">
          <div className="col-md-10">
            <h1 className='mb-3'>Your Notes</h1>
            {
              notes.length === 0 ? <div className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">Message</h5>
                  <p className="card-text">Sorry no notes avilable</p>
                </div>
              </div> : notes.map((element) => {
                return (
                  <Notes element={element} key={element.id} notes={notes} setNotes={setNotes} seteditId={seteditId} />
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )

  function getNotesFromLs() {
    const note = JSON.parse(localStorage.getItem("notes"));
    if (note) {
      return note
    } else {
      return []
    }
  }
}
