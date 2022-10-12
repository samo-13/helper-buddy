import {React, useState, useEffect} from "react";
import StepItem from "./StepItem";
import useApplicationData from "../hooks/useApplicationData";
import AllDoneButton from "./AllDoneButton";
import Confetti from "react-confetti";


const StepList = ({steps}) => {
  const [windowDimension, setDimension] = useState({width: window.innerWidth, height:window.innerHeight})
  const [Btn, setBtn] = useState(false);
  // console.log("steps!!!", {steps})
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

  return (
    <div>
      {/* this has to be map */}
      {(steps.sort((a, b) => (a.order_by - b.order_by)))
      .map(step => (
        <div>
       <StepItem {...step} />
       
     
       </div>
      ))}
      <div className='done-button'>
      <button onClick={()=>setBtn(!Btn)}>all done?</button>
      {Btn && <Confetti 
      width={windowDimension.width}
      height={windowDimension.height}
      tweenDuration={1000}/>}
      </div>
      
    </div>
  );
};

export default StepList;
