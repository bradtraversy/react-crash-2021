import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle, onEditId }) => {
  return (
    <>
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
          onEditId={onEditId}
        />
      ))}
    </>
  );
};

export default Tasks;
