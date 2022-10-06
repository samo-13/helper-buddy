import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useApplicationData() {

  const [state, setState] = useState({ // maintain the same structure.
    tasks: [],
    steps: {},
  });

  useEffect(() => {
    Promise.all([
      axios.get('http://localhost:8008/api/tasks'),
      axios.get('http://localhost:8008/api/steps')
    ]).then((all) => {
      setState(prev => ({...prev, tasks: all[0].data, steps: all[1].data }));
    })
  }, [])

  console.log('STATE:', state)


  function createTask(id, name) { // create new task and also add steps using the new task id to the steps data
    const task = {
      ...state.tasks[id],
      task: { ...task }
    }
  }


  return {
    state,
    createTask
  }
}
