import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import { response } from 'express';

export default function useApplicationData() {

  const navigate = useNavigate();
  const [state, setState] = useState({ // maintain the same structure
    tasks: [],
    steps: [],
  });

  useEffect(() => {
    Promise.all([
      axios.get('http://localhost:8080/api/tasks'),
      axios.get('http://localhost:8080/api/steps')
    ]).then((all) => {
      setState(prev => ({ ...prev, tasks: all[0].data, steps: all[1].data }));
      // setState(prev => ({ ...prev, tasks: all[0].data }));
    })
  }, [])

  // console.log('STATE:', state)

  // --- The createTask action makes an HTTP request and updates the local state
  function createTask(task, steps) { // we want this to create new task and also add steps using the new task id to the steps data
    console.log('createTask TASK:', task)

    const createdTask = axios.post(`http://localhost:8080/api/tasks`, {
      name: task[0]
    })
      .then((response) => {
        return response.data.id
        // console.log('steps:', steps)
      })
      .then(id => {
        steps.forEach(step => {
          axios.post(`http://localhost:8080/api/steps`, {
            id: step.id,  
          taskId: id,
            name: step.name,
            description: step.description,
            
          })
        })
      return id;
      
    })
    
    .catch(err => console.log(err))

    // .then(id => {
      // console.log("iddd",createdTask.id),
      // axios
      // .get(`http://localhost:8080/api/tasks/${id}`)
      // .then((res) => navigate(`task/${res.data.task.id}`))
    //  }) //here's the id
  
      
    // .then((response) => {
    //   console.log(response)
    //   // const tasks = response.data
    //   // setState({...state, tasks})
    // })
    // console.log("idd", task.id)
    // axios.get(`http://localhost:8080/api/tasks/${id}`)
    // .then((res) => console.log("resy",res))
  }
  

  function startTask(task, [steps]) {
    console.log('startTask TASK:', task.task)
    console.log('STEPS:', steps)
    const currentTask = task.task;
    const currentSteps = task.steps;
    return axios.post(`http://localhost:8080/api/tasks`, {
      name: currentTask.name,
      started_at: Date.now()

    })
    .then((response) => {
      currentSteps.forEach(step => {
        console.log("step", step)
        axios.post(`http://localhost:8080/api/steps`, {
          id: step.id,
          taskId: response.data.id,
          name: step.name,
          description: step.description
        })
      })
      console.log("response.data.id", response.data.id)
      return response.data.id
      // console.log('steps:', steps)
    })
   
/////want to get id from here into FreshTaskItem for handleClick
    // .then(id => {
    //   axios.get(`http://localhost:8080/tasks/${id}`)
    // .then (res => console.log("res", res))
    // .catch(err => console.log(err))
    // })
  }


  // function updateStep(id, date) {
  //   axios.put(`http://localhost:8080/api/steps/${id}`, {
  //     .then((res) => console.log("newww res", res)),
  //   }
  //   )
  // }

  return {
    state,
    createTask,
    startTask
  }
}


