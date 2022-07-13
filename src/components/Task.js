import { FaInfo, FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle, onTurn }) => {

  let cName = '';
    if (task.work === true) {cName = 'work'}
    if (task.school === true) {cName = 'school'}
    if (task.other === true) {cName = 'other'}

  let under = cName;
  if (task.reminder === true) {cName = 'reminder ' + cName}


  return (
    <div
    className={`task ${cName}`}      
    onDoubleClick={() => onToggle(task.id)}
    

    >
    <div
    className={`task ${task.important && 'important'}`}      
    onClick={() => onTurn(task.id)}
    
//{Icons for delete and important}
    ></div>
      <h3>
        {task.text}{' '}
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => onDelete(task.id)}
          
        />

       <FaInfo
          style={{ color: 'grey', cursor: 'pointer' }}
          
          
        />
      </h3>
      <p>{task.day}</p>
      <h6>{under}</h6>
    </div>
  )
}

export default Task