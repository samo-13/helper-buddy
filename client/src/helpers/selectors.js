
// --------------------------------------------------------------------------------------------------

function getTasks(state) {
  if (state.tasks.length < 1) {
    console.log('No tasks found!')
    return [];
  }

  const tasks = state.tasks
  console.log('SELECTORS TASKS:', tasks)
  return tasks;
}

// --------------------------------------------------------------------------------------------------

function getSteps(state) {
  if (state.steps.length < 1) {
    console.log('No steps found!')
    return [];
  }

  const steps = state.steps
  console.log('SELECTORS STEPS:', steps)
  return steps;
}

// --------------------------------------------------------------------------------------------------

// function getActiveTasks(state) {

//   if (state.tasks.length < 1) {
//     return []; // If there are no tasks in progress our data will be empty -- return an empty array.
//   };

//   // const findDayIndex = daysArray.map(daysObject => daysObject.name).indexOf(day)
//   const activeTasks = state.tasks
//   console.log('tasksArray:', tasksArray)
//   return activeTasks
// };

// --------------------------------------------------------------------------------------------------

export { getTasks, getSteps }
