import { useState, useEffect } from 'react';
import axios from 'axios';
import { promiseImpl } from 'ejs';

export default function useApplicationData() {

  const [state, setState] = useState({ // maintain the same structure.
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

  console.log('STATE:', state)


  function createNewTask(id, name) { // create new task and also add steps using the new task id to the steps data
    const task = {
      ...state.tasks[id],
      task: { ...task }
    }

    console.log('ID:', id)
    return axios.put(`http://localhost:8080/api/task/${id}`)
    .then(() => axios.get(`http://localhost:8080/api/task/${id}`))
    .then((response) => {
      const tasks = response.data
      setState({...state, tasks})

      console.log('createNewTask state:', state)
      console.log('createNewTask task:', task)
    })
  }


  return {
    state,
    createNewTask
  }
}
