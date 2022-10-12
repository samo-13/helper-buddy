import FreshTaskItem from './FreshTaskItem';
import React, { useState } from 'react';

const FreshTasks = ({ tasks }) => {
  const [state, useState] = tasks;
  // console.log("destructured task", state.task[0].steps)
  // console.log("state", state)
  // const steps = tasks[0].steps;
  return (
    <div>
      {tasks.map(task => ( console.log("tasky task", task),
        //is here where we should be finding the index of the task?
        <FreshTaskItem {...task} />
      ))}
    </div>
  );
  
};

export default FreshTasks;
