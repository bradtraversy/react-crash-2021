import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as Api from "./utils/api";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import About from "./components/About";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await Api.fetchTasks();
      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);

  // Add Task
  const addTask = async (task) => {
    const newtask = await Api.postTask(task);

    setTasks([...tasks, newtask]);
  };

  // Delete Task
  const deleteTask = async (id) => {
    const res = await Api.deleteTask(id);

    // We should control the response status to decide if we will change the state or not.
    res.status === 200
      ? setTasks(tasks.filter((task) => task.id !== id))
      : alert("Error Deleting This Task");
  };

  // Toggle Reminder
  const toggleReminder = async (id) => {
    const task = await Api.fetchTask(id);
    const updTask = { ...task, reminder: !task.reminder };
    const data = await Api.putTask(updTask);

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };

  return (
    <Router>
      <div className="container">
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        <Route
          path="/"
          exact
          render={(props) => (
            <>
              {showAddTask && <AddTask onAdd={addTask} />}
              {tasks.length > 0 ? (
                <Tasks
                  tasks={tasks}
                  onDelete={deleteTask}
                  onToggle={toggleReminder}
                />
              ) : (
                "No Tasks To Show"
              )}
            </>
          )}
        />
        <Route path="/about" component={About} />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
