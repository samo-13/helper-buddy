
export function getTasks(state) {
  if (state.tasks.length < 1) {
    console.log('No tasks found!')
    return [];
  }

  const tasks = state.tasks
  console.log('TASKS:', tasks)
  return tasks;
}


export function getSteps(state) {
  if (state.steps.length < 1) {
    console.log('No stepss found!')
    return [];
  }

  const steps = state.steps
  console.log('STEPS:', steps)
  return steps;
}
