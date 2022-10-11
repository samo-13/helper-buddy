
// --------------------------------------------------------------------------------------------------

function getTasks(state) {
  if (state.tasks.length < 1) {
    // console.log('No tasks found!')
    return [];
  }

  const tasks = state.tasks
  // console.log('SELECTORS TASKS:', tasks)
  return tasks;
}

// --------------------------------------------------------------------------------------------------

function getSteps(state) {
  if (state.steps.length < 1) {
    // console.log('No steps found!')
    return [];
  }

  const steps = state.steps
  // console.log('SELECTORS STEPS:', steps)
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

// --------------------------------------------------------------------------------------
// PSEUDO CODE
// --------------------------------------------------------------------------------------
// --- the progress value is based on the number of steps completed divided by the total number of steps
// --- when the use completes a step and clicks done, trigger the progress bar to update with the new progress calculation
// --- with the task ID, get the total number of steps that have that specific task id
// --- save the total number of steps to a variable stepsTotal
// --- then loop through the specific steps to see how many are marked as true and save to a variable completedSteps
// --- divide the completedSteps by the stepsTotal and multiply by 100 to get the progress

function getProgress(state, taskId) {

  // to hold steps
  let allSteps = state.steps;
  let taskSteps = [];
  let completedSteps = [];

  // console.log('STATE FROM getProgress:', state)
  // console.log('TASK ID FROM getProgress:', taskId)
  // console.log('STEPS FROM getProgress:', state.steps)

  // save all of the task specific steps to taskSteps variable
  // save the total number of task specific steps to stepsTotalCount variable

  for (let step of allSteps) {
    if (step.task_id === taskId) {
      taskSteps.push(step);
    }

    if ((step.completed_at !== null) && (step.task_id === taskId)) {
      completedSteps.push(step)
    }
  }

  console.log(`TASK STEPS for ID: ${taskId} STEPS: ${taskSteps.length}`)
  console.log(`TASK COMPLETED STEPS for ID: ${taskId} STEPS: ${completedSteps.length}`)
  // get % steps completed
  let progress = (completedSteps.length / taskSteps.length) * 100
  // round to whole number
  console.log('PROGRESS:', progress)
  return Math.round(progress)
}

// function getStepsRemaining(state, taskId) {


// }

export { getTasks, getSteps, getProgress }
