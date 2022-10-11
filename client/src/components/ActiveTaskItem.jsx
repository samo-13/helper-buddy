import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { getProgress, getStepsRemaining } from "../helpers/selectors";

import useApplicationData from "../hooks/useApplicationData";
import ProgressBar from "./ProgressBar";

// ----------------------------------------------------------------
// stylesheets
// ----------------------------------------------------------------
import "./ActiveTaskBox.scss";
import "./Taskbox.scss";
// ----------------------------------------------------------------

const ActiveTaskItem = (task) => {
  const {
    state,
  } = useApplicationData();

  // console.log('state from ActiveTaskItem:', state)

  let duration = task.duration
  console.log('DURATION FROM ActiveTaskItem:', duration)

  async function handleClick() {
    // LINK TO TAKE USER TO TASK/:ID PAGE
  }

  return (
    <div className="active-taskbox">
      <div className="top-active-task-box">
        <h3 className="active-task-name">{task.name}</h3>
        <span className="steps-remaining">{getStepsRemaining(state, task.id)} steps completed!</span>
      </div>
      <div className="active-task-id">Task ID (FOR TESTING): {task.id}</div>
      <h4>Time spent: {duration}</h4>
        <ProgressBar backgroundcolor="#e1ff32" progress={getProgress(state, task.id)}/>
      <br></br>
      <div className="task-box-buttons">
        <button
          type="submit"
          class="start-task"
          className="button-resume"
          onClick={handleClick}
        >
          Resume
        </button>
      </div>
    </div>
  );
};

export default ActiveTaskItem;
