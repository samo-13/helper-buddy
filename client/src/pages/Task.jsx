import axios from "axios";
import { motion, useCycle, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProgress } from "../helpers/selectors";

import ProgressBar from "../components/ProgressBar";
import StepList from "../components/StepList";
import TaskTimer from "../components/TaskTimer";
import useApplicationData from "../hooks/useApplicationData";

// ----------------------------------------------------------------
// stylesheets
// ----------------------------------------------------------------
import "./Task.scss";
// ----------------------------------------------------------------


const Task = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  const {
    state,
  } = useApplicationData();

  useEffect(() => {
    console.log("task", task)//nothing here because of null
    axios
    ////this should GET the new task that was just created,

      .get(`/api/tasks/${id}`) //need to get all steps
      .then((res) => {
        console.log("res",res.data.steps)
        const task = res.data;
        const id = res.data.task.id;
        const steps = (res.data.steps);
        setTask(task);
        console.log('TASK FROM TASK PAGE:', task)
        console.log('ID FROM TASK PAGE:', id)
      })
      .catch(err => {
        console.log(err);
      });
  }, [id]);

  return (
    <div>
      <div className="task-page-top">
        <h1>Task Name</h1>
        <TaskTimer/>

        <div id="task-progress-bar">
        <ProgressBar
          className="task-progress-bar"
          backgroundcolor="#e1ff32"
          progress={getProgress(state, id)}
        />
        </div>

      </div>
      <h2 className="task-steps-header">Steps to complete:</h2>
      <div>{task && <StepList {...task} />}</div>;
    </div>
  )
};

export default Task;
