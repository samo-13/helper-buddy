import { React, useState, useEffect } from "react";
import StepItem from "./StepItem";
import useApplicationData from "../hooks/useApplicationData";
import Confetti from "react-confetti";

// ----------------------------------------------------------------
// stylesheets
// styles can be found in pages/Task.scss
import "../styles/index.scss"
import "../styles/App.scss"
// ----------------------------------------------------------------

const StepList = ({steps}) => {

  const [message, setMessage] = useState("You can do it!")
  const [windowDimension, setDimension] = useState({width: window.innerWidth, height:window.innerHeight})
  const [Btn, setBtn] = useState(false);
  console.log(Btn)

  const detectSize = () => {
    setDimension({width: window.innerWidth, height:window.innerHeight})
  }

  useEffect(() => {
    window.addEventListener('resize', detectSize);
    return ()=>{
      window.removeEventListener('resize', detectSize);
    }
  }, [windowDimension]);
 
  const clickHandler = () => {
    setBtn(!Btn)
    setMessage("You did it! Whether you finished this task all the way, or just part of the way, be proud of yourself!")
  }

  return (
 
    <div>
         <span className="motivating-message">{message}</span>

      {/* this has to be map */}
      {(steps.sort((a, b) => (a.order_by - b.order_by)))
      .map(step => (
        <div>
          <StepItem {...step} />
       </div>
      ))}
      <div className='done-button'>
      <button className="done-button" id="done-button" onClick={()=>clickHandler()}>Complete task</button>
        {Btn && <Confetti 
        width={windowDimension.width}
        height={windowDimension.height}
        tweenDuration={500}/>}
      </div>
    </div>
  )
};

export default StepList;
