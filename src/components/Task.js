import { FaInfo, FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle, onTurn }) => {
  return (
    <div
    className={`task ${task.reminder && 'reminder'}`}      
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
    </div>
  )
}

export default Task