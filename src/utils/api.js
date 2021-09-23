// Fetch Tasks
const fetchTasks = async () => {
  const res = await fetch("http://localhost:5000/tasks");
  const data = await res.json();

  return data;
};

// Fetch Task
const fetchTask = async (id) => {
  const res = await fetch(`http://localhost:5000/tasks/${id}`);
  const data = await res.json();

  return data;
};

// Add Task
const postTask = async (task) => {
  const res = await fetch("http://localhost:5000/tasks", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(task),
  });

  return await res.json();
};

// Delete Task
const deleteTask = async (id) => {
  const res = await fetch(`http://localhost:5000/tasks/${id}`, {
    method: "DELETE",
  });

  return res;
};

// Update Task
const putTask = async (task) => {
  const res = await fetch(`http://localhost:5000/tasks/${task.id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(task),
  });

  return await res.json();
};

export { fetchTask, fetchTasks, postTask, deleteTask, putTask };
