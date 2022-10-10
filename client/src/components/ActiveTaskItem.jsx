import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { getProgress } from "../helpers/selectors";

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

  console.log('state from ActiveTaskItem:', state)
  const navigate = useNavigate();

  // click handler should GET that task page
  async function handleClick() {
    axios.get(`localhost:3000/task/${task.id}`)
  }

  return (
    <div className="active-taskbox">
      <div className="active-task-name">Task Name: {task.name}</div>
      <div className="active-task-id">Task ID: {task.id}</div>
      <ProgressBar backgroundcolor="#e1ff32" progress={getProgress(state, task.id)}/>
      <br></br>
      <h4>Time spent:</h4>
      <div className="task-box-buttons">
        <button
          type="submit"
          class="start-task"
          className="button-resume"
          onClick={handleClick}
        >
          resume
        </button>
      </div>
    </div>
  );
};

export default ActiveTaskItem;
