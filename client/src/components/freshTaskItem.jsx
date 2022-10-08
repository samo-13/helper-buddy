import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Taskbox.scss";
import useApplicationData from "../hooks/useApplicationData";

const newTaskFromClick = document.querySelectorAll("start-task");

newTaskFromClick.forEach((task) => {
  task.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskData = new taskData(e.target);
    console.log("taskData", taskData);
  });
});

const FreshTaskItem = (task) => {
  const [newTask, setNewTask] = useState(task);
  const [err, setErr] = useState("");
  const {state, startTask} = useApplicationData();
  console.log("itemtask", task.steps)
  
////////click handler should GET template and then PUT new post
  async function handleClick() {
    // let newTask = task.task;
    // let steps = task.steps;
    const id = await startTask(newTask, newTask.steps)
    axios.get(`http://localhost:8080/tasks/${id}`)
    .then (res => console.log("res", res))
    .catch(err => console.log(err))
    console.log("new task id!", id)
    return newTask;
  }

  return (
    <div className="taskbox">
      <div className="name">
      {task.task.name}
      </div>
      <Link to={`task/${task.task.id}`}>
        {/* does the newTask initiated here get paassed anywhere? */}
        <button type="submit" class="start-task" className='button-start' onClick={handleClick}>
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