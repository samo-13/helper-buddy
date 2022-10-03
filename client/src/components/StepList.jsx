import React from "react";
import StepItem from "./StepItem";



const StepList = ({steps}) => {
  return (
    <div className='stepbox'>
      {steps.map(step => (
       <StepItem name={step.name} description={step.description} />
      ))}
    </div>
  );
};

export default StepList;