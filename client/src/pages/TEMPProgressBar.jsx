import React from "react";
import ProgressBar from "../components/ProgressBar";

function Bar() {

// --------------------------------------------------------------------------------------
// DUMMY DATA
// --------------------------------------------------------------------------------------
const state = [{
  "task": {
      "id": 2,
      "user_id": null,
      "name": "Do the laundry",
      "started_at": null,
      "completed_at": null
  },
  "steps": [
      {
          "task_id": 2,
          "name": "Let's get everything we need!",
          "description": "Detergent? Fabric softener? Coins? Laundry basket? Clothespins?",
          "completed_at": null
      },
      {
          "task_id": 2,
          "name": "Now's the time to sort your laundry, if you're into that sort of thing.",
          "description": "Lights/darks? Delicates?",
          "completed_at": null
      },
      {
          "task_id": 2,
          "name": "Time to visit the washing machine!",
          "description": "Add your detergent, plus anything else you like in there.",
          "completed_at": null
      },
      {
          "task_id": 2,
          "name": "All done?",
          "description": "Transfer your washed laundry to the dryer or drying rack.",
          "completed_at": null
      },
      {
          "task_id": 2,
          "name": "All dry?",
          "description": "Try putting on some music or your favourite TV show -- lets fold this laundry, and put it in groups of items that belong together.",
          "completed_at": null
      },
      {
          "task_id": 2,
          "name": "Everything's folded!",
          "description": "Pick up each pile of folded laundry and bring it to its home.",
          "completed_at": null
      },
      {
          "task_id": 2,
          "name": "All done!",
          "description": "You did it! This task is DONE! Amazing job!",
          "completed_at": null
      }
  ]
}
,
{
  "task": {
      "id": 1,
      "user_id": null,
      "name": "Clean the bathroom",
      "started_at": null,
      "completed_at": null
  },
  "steps": [
      {
          "task_id": 1,
          "name": "Let's get everything we need:",
          "description": "Glass cleaner? Toilet cleaner? Toilet brush? Rubber gloves? Cloths or paper towel? Broom? Garbage bags?",
          "completed_at": null
      },
      {
          "task_id": 1,
          "name": "Let's see that beautiful face!",
          "description": "Spray and wipe the mirror.",
          "completed_at": null
      },
      {
          "task_id": 1,
          "name": "Clean the counter and the sink.",
          "description": "Try putting everything from the countertop into the sink, so you can spray and wipe the countertops. Then put everything back, and spray and wipe the sink.",
          "completed_at": null
      },
      {
          "task_id": 1,
          "name": "Don't forget the faucet!",
          "description": "Spray and wipe the faucet and handles.",
          "completed_at": null
      },
      {
          "task_id": 1,
          "name": "Let's scrub the toilet.",
          "description": "Add some toilet bowl cleaner to the bowl, if you like, and let it sit while we clean the rest of the toilet.",
          "completed_at": null
      },
      {
          "task_id": 1,
          "name": "Let's scrub the toilet.",
          "description": "Spray and wipe the toilet, working from top to bottom. Dont forget to get under the seat!",
          "completed_at": null
      },
      {
          "task_id": 1,
          "name": "Let's scrub the toilet.",
          "description": "Now you can use the toilet brush to scrub the the cleaner we put inside of the bowl.",
          "completed_at": null
      },
      {
          "task_id": 1,
          "name": "Wipe down that shower or bath.",
          "description": "Spray and wipe the shower faucet and handles.",
          "completed_at": null
      },
      {
          "task_id": 1,
          "name": "Wipe down that shower or bath.",
          "description": "Use your preferred cleaner to wipe down the walls, and tub if you have one.",
          "completed_at": null
      },
      {
          "task_id": 1,
          "name": "Wipe down that shower or bath.",
          "description": "If you have a detachable shower head, use it to rinse the walls and tub.",
          "completed_at": null
      },
      {
          "task_id": 1,
          "name": "Empty the garbage.",
          "description": "Don't forget to replace the bag",
          "completed_at": null
      },
      {
          "task_id": 1,
          "name": "Sweep the floors",
          "description": "Pick up any clutter, and sweep the bathroom floor.",
          "completed_at": null
      },
      {
          "task_id": 1,
          "name": "Tidy your shelves and surfaces",
          "description": "Put everything in its place.",
          "completed_at": null
      },
      {
          "task_id": 1,
          "name": "Test that squeaky clean mirror.",
          "description": "Check out your beautiful smile in the mirror. So fresh and so clean, clean!",
          "completed_at": null
      },
      {
          "task_id": 1,
          "name": "All done!",
          "description": "You did it! This task is DONE! Amazing job!",
          "completed_at": null
      }
  ]
}
,
{
  "task": {
      "id": 3,
      "user_id": null,
      "name": "Wash the dishes",
      "started_at": null,
      "completed_at": null
  },
  "steps": [
      {
          "task_id": 3,
          "name": "Let's get everything we need:",
          "description": "Gloves? Dish brush, scrubby, or cloth? Dish soap? Drying rack? Clean towel?",
          "completed_at": null
      },
      {
          "task_id": 3,
          "name": "Clear off your drying rack",
          "description": "Make sure all your clean dishes are put away.",
          "completed_at": null
      },
      {
          "task_id": 3,
          "name": "Organize the dirty dishes",
          "description": "Put similar dishes in stacks or groups, and make room in the sink for washing. Make sure any leftover food is emptied out!",
          "completed_at": null
      },
      {
          "task_id": 3,
          "name": "Time to start scrubbing!",
          "description": "Try putting on some music or your favourite TV show. Sit on a stool or a chair, if standing feels difficult.",
          "completed_at": null
      },
      {
          "task_id": 3,
          "name": "Time to start scrubbing!",
          "description": "Scrub each dish thoroughly with your brush or cloth, using hot, soapy water. Rinse, and put on the rack to dry.",
          "completed_at": null
      },
      {
          "task_id": 3,
          "name": "Time to dry.",
          "description": "Dry your dishes with a clean towel. Or, let them dry on the rack.",
          "completed_at": null
      },
      {
          "task_id": 3,
          "name": "Put those dishes away!",
          "description": "Put your beautifully clean and dry dishes back where they live.",
          "completed_at": null
      },
      {
          "task_id": 3,
          "name": "All done!",
          "description": "You did it! This task is DONE! Amazing job!",
          "completed_at": null
      }
  ]
}]

console.log('STATE STEPS:', state.steps)

// --------------------------------------------------------------------------------------
// PSEUDO CODE
// --------------------------------------------------------------------------------------
// --- the progress value is based on the number of steps completed divided by the total number of steps
// --- when the use completes a step and clicks done, trigger the progress bar to update with the new progress calculation
// --- with the task ID, get the total number of steps that have that specific task id
// --- save the total number of steps to a variable stepsTotal
// --- then loop through the specific steps to see how many are marked as true and save to a variable stepsCompleted
// --- divide the stepsCompleted by the stepsTotal and multiply by 100 to get the progress

  function getProgress(state) { // pass in state and ?taskId?
  let taskId = 2
  console.log(taskId)

  // loop through steps in state and find all of the steps for the taskId
    // save the steps in an array and return the length of stepsTotal
    // find the number of completed steps and save them to a different array and return the length of stepsCompleted
    // progress = (stepsCompleted / stepsTotal) * 100

}

getProgress()

// -------------------------------------------------------------------------------------------------------

  return (
    <div>
      <h1>This is where our progress bar goes!</h1>
        <ProgressBar backgroundcolor="#e1ff32" progress='10' />
        <ProgressBar backgroundcolor="#e1ff32" progress='40' />
        <ProgressBar backgroundcolor="#e1ff32" progress='25' />
        <ProgressBar backgroundcolor="#e1ff32" progress='100' />
        <ProgressBar backgroundcolor="#e1ff32" progress='80' />
    </div>
  );
}

export default Bar;
