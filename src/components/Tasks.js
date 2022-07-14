import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle, onTurn }) => {
  return (
    <>
      {tasks.map((task, index) => (
        <Task key={index} task={task} onDelete={onDelete} onToggle={onToggle} onTurn={onTurn} />
      ))}
    </>
  )
}

export default Tasks