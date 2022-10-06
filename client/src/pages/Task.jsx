import axios from 'axios';
import { motion, useCycle, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import StepList from '../components/StepList';


const Task = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    axios
      .get(`/api/tasks/templates/${id}`)
      .then(res => {
        const task = res.data;

        console.log(task[0].task.id);
        const filteredTasks = task.filter(t => t.task.id == id)
      
        setTask(filteredTasks[0])
      })
      .catch(err => {
        console.log(err);
      });
  }, [id]);

  return <div>{task && <StepList {...task} />}</div>;
};

export default Task;