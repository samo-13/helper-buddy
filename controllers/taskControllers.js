const db = require("../config/dbConfig");
const asyncHandler = require("express-async-handler");

const getAllTasks = asyncHandler(async (req, res) => {
  const tasks = await db.query("SELECT * FROM tasks");

  res.json(tasks.rows);
});

const createTask = asyncHandler(async (req, res) => {
  const { name } = req.body;

  const newTask = await db.query(
    "INSERT INTO tasks (name) VALUES($1) RETURNING *",
    // "INSERT INTO tasks name = $1 RETURNING *",
    [name]
  );

  res.json(newTask.rows[0]);
});

const getTask = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const task = await db.query(`SELECT * FROM tasks WHERE id = ${id}`);

  res.json(task.rows[0]);
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


// taskBuilder = function(array) {
//   const newTask = array.reduce((o, key) => ({...o, [key.name]: key.description}), {})
//   return newTask;  
// }

const getAllStepsByTaskId = asyncHandler(async (req, res) => {
  const {id} = (req.params);
  console.log("id", id);
  const steps = await db.query(
    "SELECT task_id, name, description FROM steps WHERE task_id = $1",
   [id]);
    res.json(steps.rows);
    // console.log("steps", steps.rows);
    // console.log("task id",id)
    newTaskObject = Object.fromEntries(steps.rows)
    // return res.rows;
    // console.log(newTaskObject)
    return newTaskObject;
  });

 


module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask, getAllStepsByTaskId };