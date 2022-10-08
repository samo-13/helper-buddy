import axios from "axios";
import { motion, useCycle, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StepList from "../components/StepList";
import useApplicationData from "../hooks/useApplicationData";


const Task = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {

    axios
    ////this should GET the new task that was just created, actually
      .get(`/api/tasks/templates/${id}`)
      .then((res) => {
        const task = res.data[0];
        const id = res.data[0];
        setTask(task);
        const steps = task.steps;
        console.log("steps here", steps)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return <div>{task && <StepList {...task} />}</div>;
};

export default Task;
