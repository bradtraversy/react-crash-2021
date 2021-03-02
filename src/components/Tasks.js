import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle,edit }) => {
  return (
    <>
      {tasks.map((task, index) => (
        <Task key={index} task={task} onDelete={onDelete} onToggle={onToggle} edit={edit} />
      ))}
    </>
  )
}
 
export default Tasks
