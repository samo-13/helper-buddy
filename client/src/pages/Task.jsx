import axios from "axios";
import { motion, useCycle, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StepList from "../components/StepList";
import useApplicationData from "../hooks/useApplicationData";
import Alert from 'react-bootstrap/Alert'

const Task = () => {
  const { id } = useParams();
  const [task, setTask, steps, setSteps] = useState(null);

  useEffect(() => {

   
    
    console.log("task", task)//nothing here because of null
    axios
    ////this should GET the new task that was just created,
    
      .get(`/api/tasks/${id}`) //need to get all steps
      .then((res) => {
        console.log("res",res.data.steps)
        const task = res.data;
        // const id = res.data.task.id;
        const steps = [] 
        res.data.steps.map(step => steps.push(step))
        
        setTask(task);
        task.steps = steps;
        console.log("steps here", steps)
      })
      .catch(err => {
        console.log(err);
      });

      
  }, [id]);

function allDone() {
    return (
      <Alert key='success' variant='success'>You did it!</Alert>
    )
  }
  return (
  <div>{task && <StepList {...task} />}
  <button type="click" onClick={allDone}>all done?</button>
  </div>
  )
  ;
};

export default Task;
