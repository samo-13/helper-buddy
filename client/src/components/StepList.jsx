import React from "react";
import StepItem from "./StepItem";
import useApplicationData from "../hooks/useApplicationData";


const StepList = ({steps}) => {
  console.log("unsorted steps", steps)
  const sortedSteps = steps.sort((a, b) => (a.order_by - b.order_by))
  console.log("steps!!!", {sortedSteps})
  console.log("")
  return (
    <div >
     
      {/* this has to be map */}
      
      {sortedSteps.map(step => (
        console.log("step order", step["order_by"]),
        <ul>
       <StepItem 
       key={step.order_by} 
       task_id={step.task_id}
       name={step.name}
       description={step.description} 
       />
       {/* <button onClick={()=>console.log("button!")}>Button!</button> */}
       </ul>
      ))}
    </div>
  );
};

export default StepList;

