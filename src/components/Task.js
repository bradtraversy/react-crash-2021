import { FaExclamation, FaTimes } from 'react-icons/fa';
import { useState, } from 'react';
import { Link } from 'react-router-dom'

const Task = ({ task, onDelete, onToggle, onTurn }) => {

  let cName = '';
    if (task.work === true) {cName = 'work'}
    if (task.school === true) {cName = 'school'}
    if (task.other === true) {cName = 'other'}

  let under = cName;
  if (task.reminder === true) {cName = 'reminder ' + cName}

  const [important, setImportant] = useState(task.important);

  const toggleImportant = (id) => {
    setImportant(!important);
    onTurn(id);
  }


  return (
    <div className={`task ${cName}`} onDoubleClick={() => onToggle(task.id)} onClick={() => toggleImportant(task.id)}>
      <div>
        <h3>
          {task.text}
        </h3>
        <p>{task.day}</p>
        <div>
          <Link to='/details' state={task.description}>Details</Link>
        </div>
        <h6>{under}</h6>
      </div>
      <div style={{ display:'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => onDelete(task.id)} 
        />
        <div className={ important ? 'important' : 'unimportant' }>
          <FaExclamation
            style={{ color: 'orange', cursor: 'pointer' }}
          />
        </div>
      </div>
    </div>
  )
}

export default Task