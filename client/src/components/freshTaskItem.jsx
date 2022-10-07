import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Taskbox.scss";

const newTaskFromClick = document.querySelectorAll("start-task");

newTaskFromClick.forEach((task) => {
  task.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskData = new taskData(e.target);
    console.log("taskData", taskData);
  });
});

const FreshTaskItem = (task) => {
  const [newTask, setNewTask] = useState("");
  const [err, setErr] = useState("");
  // console.log("itemtask", task.steps)
  

  const handleClick = async () => {
    try {
      const { newTask } = await axios.post(`/api/tasks/new`, {
        name: JSON.stringify(task.task.name),
        steps: JSON.stringify(task.steps)
      });
      console.log("newTaskName", newTask.name)
      console.log("newTaskid",(newTask.task.id));
      setNewTask(newTask)
      //put then here to redirect instead of using link

    } catch (err) {
      setErr(err.message);
    }
  };

  return (
    <div className="taskbox">
      <div className="name">
      {task.task.name}
      </div>
      <Link to={`task/${task.task.id}`}>
        {/* does the newTask initiated here get paassed anywhere? */}
        <button type="click" class="start-task" className='button-start' onClick={handleClick}>
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
