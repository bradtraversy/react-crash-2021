import { useState } from 'react'
import { FaTimes,FaCheckCircle,FaPen} from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle,edit}) => {
  const [showDiv,setShowDiv]=useState(false);
  const [text,setText]=useState('');
  const [date,setDate]=useState('');

  
  const show=()=>{
      setShowDiv(!showDiv);
      setText(task.text);
      setDate(task.date);
  }
  const save=(id)=>{
      setShowDiv(!showDiv);
      edit(id,text,date);
  }
  return (
    <div
      className={`task ${task.reminder && 'reminder'}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3> 
      {showDiv?<input type='text' className='text-line' value={text}
       onChange={(e)=>setText(e.target.value)} />: <p>{task.text}</p> }
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>
          {showDiv?<input type='text' className='text-line' value={date} 
          onChange={(e)=>setDate(e.target.value)} />: <label>{task.date}</label> }
          {showDiv?<FaCheckCircle style={{color:'green',cursor:'pointer'}} 
          onClick={()=>save(task.id)}/>:<FaPen style={{color:'green',cursor:'pointer'}} onClick={show} />}
      </p>
    </div>
  )
}

export default Task
