import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import "./Taskbox.scss";
import useApplicationData from "../hooks/useApplicationData";
import ProgressBar from "./ProgressBar";

// activeTasks.forEach((task) => {
//   task.addEventListener("submit", (event) => {
//     event.preventDefault();
//     const taskData = new taskData(event.target);
//     console.log("taskData", taskData);
//   });
// });

const ActiveTaskItem = (task) => {
  const {
    state,
  } = useApplicationData();

  console.log('state from ActiveTaskItem:', state)
  const navigate = useNavigate();

  // click handler should GET that task page
  async function handleClick() {
    axios
      .get(`/api/tasks`)
      .then((res) => navigate(`task/${res.data.task.id}`)) // here's the id
      .catch((err) => console.log(err));
  }

  return (
    <div className="taskbox">
      <div className="name">{task.task.name}</div>
      <button
        type="submit"
        class="start-task"
        className="button-start"
        onClick={handleClick}
      >
        resume
      </button>
      <h4>Time so far:</h4>
      <ProgressBar />
    </div>
  );
};

export default ActiveTaskItem;
