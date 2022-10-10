import "./Stepbox.scss";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import useApplicationData from "../hooks/useApplicationData";
// import updateStep from controllers/stepController.js;

const clickData = document.querySelectorAll('button[type="submit"]');
console.log("clickdaata", clickData)
clickData.forEach((step) => {
  step.addEventListener("submit", (e) => {
    e.preventDefault();
    const stepData = new stepData(e.target);
    console.log("stepdata", )
  });
});
/////////////////////////////////

const StepItem = ({ ...step }) => {
  const {
    state,
  } = useApplicationData();
  const [thisStep, setThisStep] = useState(step)
  const [open, setOpen] = useState(false);
  const [err, setErr] = useState("");

<<<<<<< HEAD
  const handleClick = function () {
    console.log("thisstep",thisStep)
    //how to get id from here?
=======
  async function handleClick() {
    console.log("state.steps",state.steps)
    console.log("thisStep", thisStep)
    console.log()
    // const stepId = "";
    const retrievedStep = state.steps.filter(step => step.task_id === thisStep.task_id && step.description === thisStep.description 
    )
    const stepId = retrievedStep[0].id
    console.log("step id", stepId)

    axios({
      method: 'put',
      url: `/api/steps/${stepId}`,
      data: {
      completed_at: Date.now()
    } 
      
    
    })
    // .then((res) => console.log("result", res))
    // .catch(err => console.log(err))
    // return {...updatedStep}
    // console.log("updatedstep",updatedStep)
>>>>>>> megan/more-task
  }
  




  const closedStep = (
    <div className="stepbox" onClick={() => setOpen(true)}>
      <h3>{step.name}</h3>
    </div>
  );

  const openStep = (
    <div className="stepbox" onClick={() => setOpen(false)}>
      <h3>{step.name}</h3>
      <h4 className="expanded_step">{step.description}</h4>
  
      <button type="submit" className='button' onClick={handleClick}>Done!</button>
    </div>
  );

  if (!open) {
    return closedStep;
  } else {
    return openStep;
  }
};


export default StepItem;
