import axios from "axios";
import { motion, useCycle, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";
import StepList from "../components/StepList";
import TaskTimer from "../components/TaskTimer";
import useApplicationData from "../hooks/useApplicationData";


const Task = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    console.log("task", task)//nothing here because of null
    axios
    ////this should GET the new task that was just created,

      .get(`/api/tasks/${id}`) //need to get all steps
      .then((res) => {
        console.log("res",res.data.steps)
        const task = res.data;
        // const id = res.data.task.id;
        const steps = (res.data.steps);
        setTask(task);
        console.log("steps here", task.steps)
      })
      .catch(err => {
        console.log(err);
      });
  }, [id]);

  return (
    <div>
      <div className="task-page-top">
        <h1>{task.task.name}</h1>
        <TaskTimer/>
        <ProgressBar />
      </div>
      <h2>Steps to complete:</h2>
      <div>{task && <StepList {...task} />}</div>;
    </div>
)


};

export default Task;
