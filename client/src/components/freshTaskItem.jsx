import axios from "axios";
import { Link } from "react-router-dom";
import "./Taskbox.scss";

const newTaskFromClick = document.querySelectorAll("start-task");
console.log("newtaskfromclicK", newTaskFromClick);

newTaskFromClick.forEach((task) => {
  task.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskData = new taskData(e.target);
  });
  // axios
  //     .post(e.target.action)
  //     .then(res => {
  //       console.log(res)
  //     })
  //     .catch(console.error);
});

const FreshTaskItem = ({ task }) => {
  return (
    // add onClick = {action} here
    <div className="taskbox">
      {/* here's where the submit button goes */}
      {/* also add preview button with link to `task/${task.id}` */}
      {/* make this link just the text */}
      <h3>{task.name}</h3>
      <Link to={`/task/${task.id}`}>
        <button type="submit" class="start-task">
          start
        </button>
        <button type="click" class="preview-task">
          preview
        </button>

      </Link>
      <h4>Average time to complete:</h4>
    </div>
  );
};

export default FreshTaskItem;
