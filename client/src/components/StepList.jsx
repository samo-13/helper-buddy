import React from "react";
import StepItem from "./StepItem";
import useApplicationData from "../hooks/useApplicationData";


const StepList = ({steps}) => {
  console.log("steps!!!", steps)
  return (
    <div >
      {steps.map(step => (
        <div>
       <StepItem {...step}/>
       {/* <button onClick={()=>console.log("button!")}>Button!</button> */}
       </div>
      ))}
    </div>
  );
};

export default StepList;

