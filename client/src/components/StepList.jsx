import React from "react";
import StepItem from "./StepItem";
import useApplicationData from "../hooks/useApplicationData";


const StepList = ({steps}) => {
  console.log("steps!!!", {steps})
  console.log("")
  const sortedSteps = steps.sort((a, b) => {
    return a.step_key - b.step_key
  })
  
  return (
    
    <div >
      {/* this has to be map */}
      {sortedSteps.map(step => (
        <div>
       <StepItem {...step} key={step.id} /> 
       {/* <button onClick={()=>console.log("button!")}>Button!</button> */}
       </div>
      ))}
    </div>
  );
};

export default StepList;

