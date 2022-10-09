import "./Stepbox.scss";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import useApplicationData from "../hooks/useApplicationData";

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
    updateStep
  } = useApplicationData();
  const [thisStep, setThisStep] = useState(step)
  const [open, setOpen] = useState(false);
  const [err, setErr] = useState("");

  const handleClick = function () {
    console.log("thisstep",thisStep)
    //how to get id from here?
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
      {/* onClick={{handleClick} */}
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
