import { FaEdit, FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle, onEditId }) => {
  return (
    <div
      className={`task ${task.reminder && "reminder"}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}{" "}
        <div style={{ alignItems: "right" }}>
          <FaTimes
            onClick={() => onDelete(task.id)}
            style={{ color: "red", cursor: "pointer", marginRight: 30 }}
          />
          <FaEdit
            onClick={() => onEditId(task.id)}
            style={{ color: "green", cursor: "pointer" }}
          />
        </div>
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
