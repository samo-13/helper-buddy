import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import "./Taskbox.scss";
import useApplicationData from "../hooks/useApplicationData";

const newTaskFromClick = document.querySelectorAll("start-task");

newTaskFromClick.forEach((task) => {
  task.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskData = new taskData(e.target);
    // console.log("taskData", taskData);
  });
});

const FreshTaskItem = (task) => {
  const [newTask, setNewTask] = useState(task);
  const [err, setErr] = useState("");
  const { state, startTask } = useApplicationData();
  const navigate = useNavigate();

  const steps = task.steps.length
  //////// click handler should GET template and then PUT new post
  async function handleClick() {
    // let newTask = task.task;
    // let steps = task.steps;
    const id = await startTask(newTask, newTask.steps);
    axios
      .get(`http://localhost:8080/api/tasks/${id}`)
      .then((res) => navigate(`task/${res.data.task.id}`)) //here's the id
      .catch((err) => console.log(err));
    return { ...newTask };
  }

  return (
    <div className="taskbox">
      <h3 className="name">{task.task.name}</h3>
      <div className="number-steps">Steps to complete: {steps}</div>
    <div className="task-box-buttons">
      <button
        type="submit"
        class="start-task"
        className="button-start"
        onClick={handleClick}
      >
        Start
      </button>
    </div>
    </div>
  );
};

export default FreshTaskItem;
