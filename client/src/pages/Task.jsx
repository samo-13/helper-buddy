import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import StepList from '../components/StepList';

const Task = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    axios
      .get(`/api/tasks/${id}`)
      .then(res => {
        const task = res.data;

        setTask(task);
      })
      .catch(err => {
        console.log(err);
      });
  }, [id]);

  return <div>{task && <StepList {...task} />}</div>;
};

export default Task;
