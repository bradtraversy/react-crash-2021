import { useState, useEffect } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import Button from "./Button";

const TaskDetails = () => {
  const [loading, setLoading] = useState(true);
  const [task, setTask] = useState({});
  const [error, setError] = useState(null);

  //using params passed in the Link to
  const params = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchTask = async () => {
      const res = await fetch(`http://localhost:5000/tasks/${params.id}`);
      const data = await res.json();

      if (res.status === 404) {
        setError("Task not found");
        navigate("/");
      }

      setTask(data);
      setLoading(false);
    };

    fetchTask();
  });

  if (error) {
    return <Navigate to="/" />;
  }

  return loading ? (
    <h3>loading...</h3>
  ) : (
    <div>
      <h3>{task.text}</h3>
      <h3>{task.day}</h3>
      <Button
        onClick={() => {
          navigate(-1);
        }}
        text="Go Back"
      />
    </div>
  );
};

export default TaskDetails;
