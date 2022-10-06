import React from "react";
import StepItem from "./StepItem";



const StepList = ({steps}) => {
  return (
    <div >
      {steps.map(step => (
        <div>
       <StepItem {...step} key={step.id} />
       {/* <button onClick={()=>console.log("button!")}>Button!</button> */}
       </div>
      ))}
    </div>
  );
};

export default StepList;