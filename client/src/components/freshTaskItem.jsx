import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import "./Taskbox.scss";
import useApplicationData from "../hooks/useApplicationData";

const newTaskFromClick = document.querySelectorAll("start-task");

newTaskFromClick.forEach((task) => {
  task.addEventListener("submit", (e) => {
    e.preventDefault();
    const taskData = new taskData(e.target);
    console.log("taskData", taskData);
  });
});

const FreshTaskItem = ({...task}) => {
  const [newTask, setNewTask] = useState(task);
  const [err, setErr] = useState("");
  const { state, startTask } = useApplicationData();
  const navigate = useNavigate();
  console.log("itemtask", task)


  ////////click handler should GET template and then PUT new post
  async function handleClick() {
    // let newTask = task.task;
    // let steps = task.steps;
    const id = await startTask(newTask, newTask.steps);
    axios
      .get(`http://localhost:8080/api/tasks/${id}`)
      .then((res) => navigate(`task/${res.data.task.id}`)) //here's the id
      .catch((err) => console.log(err));

    console.log("id!", id);
    console.log("new task", state);
    return { ...newTask };
  }
  
  async function allDone() {
    console.log("alert",task.steps)
  }
  // const handlePreview = () => {
  //   console.log("in here!", task.task.id)
  //   const id = task.task.id;
  //   // axios.get(`api/templates/${task.task.id}`)
  //   // .then ((res) =>
  //   navigate(`/api/tasks/templates/${task.task.id}`)
  //   // )
  //   // .catch(err => console.log(err))
  // }

  return (
    <div className="taskbox">
      <div className="name">{task.task.name}</div>

      <button
        type="submit"
        class="start-task"
        className="button-start"
        onClick={handleClick}
      >
        start
      </button>
      {/* <Link to={`/api/tasks/templates/${task.id}`}> */}
      {/* onClick={handlePreview} */}
      <button type="click" class="preview-task">
        preview
      </button>
      {/* </Link> */}
      <h4>Average time to complete:</h4>
    </div>
  );
};

export default FreshTaskItem;
