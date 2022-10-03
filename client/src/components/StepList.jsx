import React from "react";
import Step from "./Step";



const StepList = ({ steps }) => {
  return (
    <div>
  {steps.map(step => ( //something isn't right here
    <Step
      task_id={step.task_id}
      name={step.name}
      description={step.description} />
      ))}
</div>
  );
};

export default StepList;


//you need to get mentor help with thi