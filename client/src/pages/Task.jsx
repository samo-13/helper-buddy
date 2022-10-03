import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import StepItem from '../components/StepItem';

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

  return <div>{task && <StepItem {...task} />}</div>;
};

export default Task;
