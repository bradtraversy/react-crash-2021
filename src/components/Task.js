import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
  let cName = '';//set side border color
  if (task.reminder === true) {
      if (task.work === true) {cName = 'reminder work'}
      if (task.school === true) {cName = 'reminder school'}
      if (task.other === true) {cName = 'reminder other'}
  }
  else {
    if (task.work === true) {cName = 'work'}
    if (task.school === true) {cName = 'school'}
    if (task.other === true) {cName = 'other'}
  }

  return (
    <div
      className={`task ${task.reminder && 'reminder'}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}{' '}
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{task.day}</p>
      <h6>{task.category}</h6>

    </div>
  )
}

export default Task
