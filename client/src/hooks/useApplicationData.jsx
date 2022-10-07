import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useApplicationData() {

  const [state, setState] = useState({ // maintain the same structure
    tasks: [],
    steps: [],
  });

  useEffect(() => {
    Promise.all([
      axios.get('http://localhost:8080/api/tasks'),
      axios.get('http://localhost:8080/api/steps')
    ]).then((all) => {
      setState(prev => ({...prev, tasks: all[0].data, steps: all[1].data }));
    })
  }, [])

  // console.log('STATE:', state)

  // --- The createTask action makes an HTTP request and updates the local state
  function createTask(id, task) { // we want this to create new task and also add steps using the new task id to the steps data
    console.log('createTask ID:', id)
    console.log('createTask TASK:', task)
    return axios.put(`http://localhost:8080/api/task/${id}`)
    .then(() => axios.get(`http://localhost:8080/api/tasks`))
    .then((response) => {
      const tasks = response.data
      setState({...state, tasks})
    })
  }

  return {
    state,
    createTask
  }
}
