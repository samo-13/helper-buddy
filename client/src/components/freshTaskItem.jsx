import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Taskbox.scss";

const newTaskFromClick = document.querySelectorAll("start-task");

newTaskFromClick.forEach((task) => {
  task.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskData = new taskData(e.target);
    console.log(taskData);
  });
});

const FreshTaskItem = (task) => {
  // const [newTask, setNewTask] = useState();
  const [err, setErr] = useState("");
  // console.log("itemtask", task.steps)
  

  const handleClick = async () => {
    try {
      const { newTask } = await axios.post(`/api/tasks/new`, {
        name: task.task.name,
        steps: task.steps
      });
      console.log("name", task.task.name)
      console.log("newTask", (newTask, null, 4));
    } catch (err) {
      setErr(err.message);
    }
  };

  return (
    <div className="taskbox">
      <h3>{task.task.name}</h3>
      {/* this link should point to a template task? but getTask is using template */}
      <Link to={`task/${task.task.id}`}>
        <button type="click" class="start-task" onClick={handleClick}>
          start
        </button>
        <button type="click" class="preview-task">
          preview
        </button>
      </Link>
      <h4>Average time to complete:</h4>
    </div>
  );
};

export default FreshTaskItem;
