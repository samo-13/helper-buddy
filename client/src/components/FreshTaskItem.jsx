import { Link } from "react-router-dom";
import "./Taskbox.scss";

const FreshTaskItem = ({ task }) => {
  return (
    // add onClick = {action} here
    <div className="taskbox" > 
      <Link to={`/task/${task.id}`}>
        <span>-- Steps</span>
        <h3>{task.name}</h3>
        <h4>Average time to complete:</h4>
      </Link>
    </div>
  );
};

export default FreshTaskItem;
