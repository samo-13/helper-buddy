import React from "react";
import "../components/StepList.scss"


const Step = ({props}) => {
  return (
    <li>
     <div> I am a step component 
       <h2>{props.name}</h2> 
       <h3>{props.description}</h3>
       </div>
     </li>
   );
 }

 export default Step;