import React from 'react'
import { useState } from 'react'

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)
  const [description, setDetail] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if(!text) {
        alert('Please add a task')
        return
    }

    onAdd({text, day, reminder, description})

    setText('')
    setDay('')
    setReminder(false) 
    setDetail('')
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Task</label>
        <input 
          type='text' 
          placeholder='Add Task' 
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Day & Time</label>
        <input 
          type='text' 
          placeholder='Add Day & Time' 
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>
          Description
        </label>
        <textarea value={description} onChange={(e) => setDetail(e.target.value)} />
      </div>
      <div className='form-control form-control-check'>
        <label>Set Reminder</label>
        <input 
          type='checkbox' 
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}/>
      </div>

      <input type='submit' value='Save Task' className='btn btn-block' />
    </form>
  )
}

export default AddTask
