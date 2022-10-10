
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


// --------------------------------------------------------------------------------------------------

export { getTasks, getSteps }
