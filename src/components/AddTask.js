import { useState } from 'react'

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)
  const [work, setWork] = useState(false)
  const [school, setSchool] = useState(false)
  const [other, setOther] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    if (!text) {
      alert('Please add a task')
      return
    }

    onAdd({text, day, reminder, work, school, other})

    setText('')
    setDay('')
    setReminder(false)
    setWork(false)
    setSchool(false)
    setOther(false)
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
      <div className='form-control form-control-check'>
        <label>Set Reminder</label>
        <input
          type='checkbox'
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <div className='form-control form-control-check'>
            <label className = 'work-label'>Set Work</label>
            <input type='checkbox'
            checked={work} 
            value={work} 
            onChange={(e) => setWork(e.currentTarget.checked)}/>
        </div>
        <div className='form-control form-control-check'>
            <label className = 'school-label'>Set School</label>
            <input type='checkbox'
            checked={school} 
            value={school} 
            onChange={(e) => setSchool(e.currentTarget.checked)}/>
        </div>
        <div className='form-control form-control-check'>
            <label className = 'other-label'>Set Other</label>
            <input type='checkbox'
            checked={other} 
            value={other} 
            onChange={(e) => setOther(e.currentTarget.checked)}/>
        </div>

      <input type='submit' value='Save Task' className='btn btn-block' />
    </form>
  )
}

export default AddTask
