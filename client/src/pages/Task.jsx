import axios from 'axios';
import { motion, useCycle, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProgress, getStepsRemaining } from '../helpers/selectors';

import ProgressBar from '../components/ProgressBar';
import StepList from '../components/StepList';
import TaskTimer from '../components/TaskTimer';
import useApplicationData from '../hooks/useApplicationData';

// ----------------------------------------------------------------
// stylesheets
// ----------------------------------------------------------------
import './Task.scss';
// ----------------------------------------------------------------

const Task = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const [taskName, setTaskName] = useState(null);
  const [steps, setSteps] = useState([]);
  const [completed, setCompleted] = useState(0);
  const [remaining, setRemaining] = useState(0);

  const { state } = useApplicationData();

  console.log('STATE:', state);

  // useEffect(() => {
    // nothing here because of null
    axios
      // this should GET the new task that was just created,

      .get(`/api/tasks/${id}`) // need to get all steps
      .then(res => {
        // console.log('res', res.data.steps);
        const task = res.data;
        const id = res.data.task.id;
        const steps = res.data.steps;
        setTask(task);
        setTaskName(task.task.name);
        setSteps(task.steps);
        getCompleteTaskSteps(steps);
        getStepsRemaining(steps);
        // console.log('TASK FROM TASK PAGE:', task);
        // console.log('ID FROM TASK PAGE:', id);
      })
      .catch(err => {
        console.log(err);
      });

    function getCompleteTaskSteps(steps) {
      let complete = [];
      for (let step of steps) {
        if (step.completed_at !== null) {
          complete.push(step);
        }
      }
      let result = (complete.length / steps.length) * 100;
      // return Math.floor(result)
      setCompleted(Math.floor(result));
    }

    function getStepsRemaining(steps) {
      let remaining = [];
      for (let step of steps) {
        if (step.completed_at !== null) {
          remaining.push(step);
        }
      }

      let result = steps.length - remaining.length
      setRemaining(result);
    
    }

  // }, [id]);

  // let taskName = task.task.name
  // let steps = task.steps

  // console.log('HI TASK:', taskName);
  // console.log('HI STEPS:', steps);

  // ----------------------------------------------------------------

  return (
    <div>
      <div className='task-page-top'>
        <h1>{taskName}</h1>

        <TaskTimer task={task} />

        <div id='task-progress-bar'>
          <ProgressBar
            className='task-progress-bar'
            backgroundcolor='#e1ff32'
            progress={completed}
          />
        </div>

        <h3 className='task-step-progress'>{remaining} steps remaining!</h3>
      </div>
      <h2 className='task-steps-header'>Steps to complete:</h2>
      <div>{task && <StepList {...task} />}</div>
    </div>
  );
};

export default Task;
