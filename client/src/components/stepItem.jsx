import "./Stepbox.scss";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const clickData = document.querySelectorAll('button[type="submit"]');
console.log("clickdaata", clickData)
clickData.forEach((step) => {
  step.addEventListener("submit", (e) => {
    e.preventDefault();
    const stepData = new stepData(e.target);
  });
});
/////////////////////////////////

const StepItem = ({ ...step }) => {
  const task = useState();
  const [open, setOpen] = useState(false);
  const [err, setErr] = useState("");

  

  //this needs to go in the click handler
  useEffect(() => {
    
    //how does this get routed? also need to figure out how to write query that takes step id as index
  //   axios.put(`/api/task/${task.id}`, {
  //         completed_at: JSON.stringify(time)
  //       })
  //     .catch((err) => {
  //       console.log(err)
  //     });
  // });

  const handleClick = async () => {
    const time = Date.now();
    axios.put(`/api/task/${task.id}`, {
  
      completed_at: JSON.stringify(time)
    })
   
  .catch((err) => {
    console.log(err)
  });

  


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
      <button type="submit" className='button' onClick={clickHandler}>Done!</button>
    </div>
  );

  if (!open) {
    return closedStep;
  } else {
    return openStep;
  }
};


export default StepItem;
