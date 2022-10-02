import React from "react";
import StepList from "../components/StepList";


const props = {
  task: {
  id: 1,
  user_id: null,
  name: "Clean the bathroom",
  started_at: null,
  completed_at: null
  },
  steps: [
  {
  task_id: 1,
  name: "Let's get everything we need:",
  description: "Glass cleaner? Toilet cleaner? Toilet brush? Rubber gloves? Cloths or paper towel? Broom? Garbage bags?",
  completed_at: null
  },
  {
  task_id: 1,
  name: "Let's see that beautiful face!",
  description: "Spray and wipe the mirror.",
  completed_at: null
  },
  {
  task_id: 1,
  name: "Clean the counter and the sink.",
  description: "Try putting everything from the countertop into the sink, so you can spray and wipe the countertops. Then put everything back, and spray and wipe the sink.",
  completed_at: null
  },
  {
  task_id: 1,
  name: "Don't forget the faucet!",
  description: "Spray and wipe the faucet and handles.",
  completed_at: null
  },
  {
  task_id: 1,
  name: "Let's scrub the toilet.",
  description: "Add some toilet bowl cleaner to the bowl, if you like, and let it sit while we clean the rest of the toilet.",
  completed_at: null
  },
  {
  task_id: 1,
  name: "Let's scrub the toilet.",
  description: "Spray and wipe the toilet, working from top to bottom. Dont forget to get under the seat!",
  completed_at: null
  },
  {
  task_id: 1,
  name: "Let's scrub the toilet.",
  description: "Now you can use the toilet brush to scrub the the cleaner we put inside of the bowl.",
  completed_at: null
  },
  {
  task_id: 1,
  name: "Wipe down that shower or bath.",
  description: "Spray and wipe the shower faucet and handles.",
  completed_at: null
  },
  {
  task_id: 1,
  name: "Wipe down that shower or bath.",
  description: "Use your preferred cleaner to wipe down the walls, and tub if you have one.",
  completed_at: null
  },
  {
  task_id: 1,
  name: "Wipe down that shower or bath.",
  description: "If you have a detachable shower head, use it to rinse the walls and tub.",
  completed_at: null
  },
  {
  task_id: 1,
  name: "Empty the garbage.",
  description: "Don't forget to replace the bag",
  completed_at: null
  },
  {
  task_id: 1,
  name: "Sweep the floors",
  description: "Pick up any clutter, and sweep the bathroom floor.",
  completed_at: null
  },
  {
  task_id: 1,
  name: "Tidy your shelves and surfaces",
  description: "Put everything in its place.",
  completed_at: null
  },
  {
  task_id: 1,
  name: "Test that squeaky clean mirror.",
  description: "Check out your beautiful smile in the mirror. So fresh and so clean, clean!",
  completed_at: null
  },
  {
  task_id: 1,
  name: "All done!",
  description: "You did it! This task is DONE! Amazing job!",
  completed_at: null
  }
  ]
  }

export default function Task() {
  const props = {
    task: {
    id: 1,
    user_id: null,
    name: "Clean the bathroom",
    started_at: null,
    completed_at: null
    },
    steps: [
    {
    task_id: 1,
    name: "Let's get everything we need:",
    description: "Glass cleaner? Toilet cleaner? Toilet brush? Rubber gloves? Cloths or paper towel? Broom? Garbage bags?",
    completed_at: null
    },
    {
    task_id: 1,
    name: "Let's see that beautiful face!",
    description: "Spray and wipe the mirror.",
    completed_at: null
    },
    {
    task_id: 1,
    name: "Clean the counter and the sink.",
    description: "Try putting everything from the countertop into the sink, so you can spray and wipe the countertops. Then put everything back, and spray and wipe the sink.",
    completed_at: null
    },
    {
    task_id: 1,
    name: "Don't forget the faucet!",
    description: "Spray and wipe the faucet and handles.",
    completed_at: null
    },
    {
    task_id: 1,
    name: "Let's scrub the toilet.",
    description: "Add some toilet bowl cleaner to the bowl, if you like, and let it sit while we clean the rest of the toilet.",
    completed_at: null
    },
    {
    task_id: 1,
    name: "Let's scrub the toilet.",
    description: "Spray and wipe the toilet, working from top to bottom. Dont forget to get under the seat!",
    completed_at: null
    },
    {
    task_id: 1,
    name: "Let's scrub the toilet.",
    description: "Now you can use the toilet brush to scrub the the cleaner we put inside of the bowl.",
    completed_at: null
    },
    {
    task_id: 1,
    name: "Wipe down that shower or bath.",
    description: "Spray and wipe the shower faucet and handles.",
    completed_at: null
    },
    {
    task_id: 1,
    name: "Wipe down that shower or bath.",
    description: "Use your preferred cleaner to wipe down the walls, and tub if you have one.",
    completed_at: null
    },
    {
    task_id: 1,
    name: "Wipe down that shower or bath.",
    description: "If you have a detachable shower head, use it to rinse the walls and tub.",
    completed_at: null
    },
    {
    task_id: 1,
    name: "Empty the garbage.",
    description: "Don't forget to replace the bag",
    completed_at: null
    },
    {
    task_id: 1,
    name: "Sweep the floors",
    description: "Pick up any clutter, and sweep the bathroom floor.",
    completed_at: null
    },
    {
    task_id: 1,
    name: "Tidy your shelves and surfaces",
    description: "Put everything in its place.",
    completed_at: null
    },
    {
    task_id: 1,
    name: "Test that squeaky clean mirror.",
    description: "Check out your beautiful smile in the mirror. So fresh and so clean, clean!",
    completed_at: null
    },
    {
    task_id: 1,
    name: "All done!",
    description: "You did it! This task is DONE! Amazing job!",
    completed_at: null
    }
    ]
    }
  
    return (
      <div className="App">
        <header className="App-header">
           <h2>Task List!</h2>
           <h3><StepList task_id={props.steps.task_id} name={props.steps.name} description={props.steps.description}/></h3>
        </header>
        <div>
          <form action="../../post" method="post">
            <button type="submit">Connected?</button>
          </form>
        </div>
      </div>
    );
  }


