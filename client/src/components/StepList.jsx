import React from "react";
import StepItem from "./StepItem";
import useApplicationData from "../hooks/useApplicationData";


const StepList = ({steps}) => {

  console.log("steps!!!", {steps})
  console.log("")
  return (
    <div >
      {/* this has to be map */}
      {steps.map(step => (
        <div>
       <StepItem {...step} />
       {/* <button onClick={()=>console.log("button!")}>Button!</button> */}
       </div>
      ))}
    </div>
  );
};

export default StepList;

