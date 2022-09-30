const db = require("../config/dbConfig");
const asyncHandler = require("express-async-handler");

let steps = [
  {
    task_id: 1,
    name: "Let's get everything we need:",
    description: 'Glass cleaner? Toilet cleaner? Toilet brush? Rubber gloves? Cloths or paper towel? Broom? Garbage bags?'
  },
  {
    task_id: 1,
    name: "Let's see that beautiful face!",
    description: 'Spray and wipe the mirror.'
  },
  {
    task_id: 1,
    name: 'Clean the counter and the sink.',
    description: 'Try putting everything from the countertop into the sink, so you can spray and wipe the countertops. Then put everything back, and spray and wipe the sink.'
  },
  {
    task_id: 1,
    name: "Don't forget the faucet!",
    description: 'Spray and wipe the faucet and handles.'
  },
  {
    task_id: 1,
    name: "Let's scrub the toilet.",
    description: 'Add some toilet bowl cleaner to the bowl, if you like, and let it sit while we clean the rest of the toilet.'
  }
]


  //build task object
  taskBuilder = function(array) {
  const newTask = array.reduce((o, key) => ({...o, [key.name]: key.description}), {})
  return newTask;  
}

  console.log(taskBuilder(steps))