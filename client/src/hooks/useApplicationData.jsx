import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useApplicationData() {

  const [state, setState] = useState({ // maintain the same structure
    tasks: [],
    // steps: [],
  });

  useEffect(() => {
    Promise.all([
      axios.get('http://localhost:8080/api/tasks'),
      // axios.get('http://localhost:8080/api/steps')
    ]).then((all) => {
      // setState(prev => ({...prev, tasks: all[0].data, steps: all[1].data }));
      setState(prev => ({...prev, tasks: all[0].data}));
    })
  }, [])

  // console.log('STATE:', state)

  // --- The createTask action makes an HTTP request and updates the local state
  function createTask(task) { // we want this to create new task and also add steps using the new task id to the steps data
    console.log('createTask TASK:', task)

    axios.post(`http://localhost:8080/api/tasks`)
    .then((response) => {
      console.log(response[0])
      // console.log('steps:', steps)
    }).catch(err => console.log(err))
    // .then((response) => {
    //   console.log(response)
    //   // const tasks = response.data
    //   // setState({...state, tasks})
    // })
  }

  return {
    state,
    createTask
  }
}
