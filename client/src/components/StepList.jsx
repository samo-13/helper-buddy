import React from "react";
import StepItem from "./StepItem";
import useApplicationData from "../hooks/useApplicationData";


const StepList = ({...task}) => {
  console.log("steps!!!", {...task})
  console.log("")
  // steps.sort((a, b) => {
  //   return a.step_key - b.step_key
  // })
  return (
    
    <div >
      {/* this has to be map */}
      {task.steps.map(step => (
        <div>
       <StepItem {...step} key={step.id} /> 
       {/* <button onClick={()=>console.log("button!")}>Button!</button> */}
       </div>
      ))}
    </div>
  );
};

export default StepList;

