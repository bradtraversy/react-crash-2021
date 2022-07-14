import { useEffect, useState } from "react";

const AddTask = ({ onAdd, onEdit, taskToEdit }) => {
  const [taskId, setTaskId] = useState("");
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  useEffect(() => {
    console.log("use effect");
    taskToEdit.map(
      (task) => (
        setTaskId(task.id),
        setText(task.text),
        setDay(task.day),
        setReminder(task.reminder)
      )
    );
  }, [taskToEdit]);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please add a task");
      return;
    }

    if (taskToEdit.length !== 0) {
      onEdit({ taskId, text, day, reminder });
    } else {
      onAdd({ text, day, reminder });
    }

    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input
          type="text"
          placeholder="Add Day & Time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
