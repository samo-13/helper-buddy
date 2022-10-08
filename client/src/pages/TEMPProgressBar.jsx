import React from "react";
import ProgressBar from "../components/ProgressBar";

function Bar() {

// ------------------------------------------------
// PSEUDO CODE
// --- the progress value is based on the number of steps completed divided by the total number of steps
// --- when the use completes a step and clicks done, trigger the progress bar to update with the new progress calculation
// --- with the task ID, get the total number of steps that have that specific task id
// --- save the total number of steps to a variable stepsTotal
// --- then loop through the specific steps to see how many are marked as true and save to a variable stepsCompleted
// --- divide the stepsCompleted by the stepsTotal and multiply by 100 to get the progress
// ------------------------------------------------

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
