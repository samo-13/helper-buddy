import React, { useState, useEffect } from 'react';
import axios from "axios";
// import { getActiveTasks } from "../helpers/selectors";

function Task() {
  const ACTIVE = 'active';
  const [tasks, setTasks] = useState([]);
  const [list, setList] = useState(ACTIVE);

  useEffect(() => {
    //here's where the tasks get loaded from the templates
    Promise.all([axios.get('/api/tasks/')])
      .then(response => {
        const tasks = response[0].data;
        console.log("Active Tasks", tasks)
        //tasks.forEach((task) => console.log(task.steps)))
        setTasks(tasks);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>This is where the in-progress task list goes!</h1>
      {tasks}
    </div>
  );
}

export default Task;
