const db = require("../config/dbConfig");
const taskInfo = require("../config/taskInfo.json")
const asyncHandler = require("express-async-handler");

const getAllTasks = asyncHandler(async (req, res) => {
  const tasks = await taskInfo.query("SELECT * FROM tasks");
  res.json(tasks.rows);
});

const createTask = asyncHandler(async (req, res) => {
  const { name, steps } = req.body;
  const newTask = await db.query(
    "INSERT INTO tasks (name, steps) VALUES($1, $2) RETURNING *",
    [name, steps]
  );
  res.json(newTask.rows[0]);
});

const getTask = asyncHandler(async (req, res) => {
  const { id } = req.params;
// here i'm trying to send the getTask request to JSON, not db
  const task = await db.query(`SELECT task FROM tasks WHERE id = ${id}`);
  taskName = task.name;
  console.log(taskName)

  const steps = await taskInfo.query(
    "SELECT task_id, name, description,completed_at FROM steps WHERE task_id = $1",
   [id]);
   res.json({task: task.rows[0], steps: steps.rows});
});

const updateTask = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const updatedTask = await db.query(
    "UPDATE tasks SET name = $1 WHERE id = $2 RETURNING *",
    [name, id]
  );

  res.json({ message: `Task#${updatedTask.rows[0].id} updated` });
});

const deleteTask = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const deletedTask = await db.query(
    "DELETE FROM tasks WHERE id = $1 RETURNING *",
    [id]
  );

  res.json({ message: `Task#${deletedTask.rows[0].id} deleted` });
});

// const getAllStepsByTaskId = asyncHandler(async (req, res) => {
//   const {id} = (req.params);
//   console.log("id", id);

//   });


//move to src>client:
  // newTaskObject = Object.fromEntries(steps.rows)
  // return newTaskObject;



module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };