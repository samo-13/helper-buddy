import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import StepList from '../components/StepList';


const Templates = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    axios
      .get(`/api/tasks/templates/${id}`)
      .then((res) => {
        const task = res.data[0];
        console.log("task!!")
        const id = res.data[0];
        setTask(task);
        const steps = task.steps;
        // createTask(steps);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
   console.log("...task", {...task})
  return <div>{task && <StepList {...task} />}</div>;
};

export default Templates;