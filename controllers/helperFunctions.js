const db = require("../config/dbConfig");
const asyncHandler = require("express-async-handler");

const getAllStepsByTaskId = asyncHandler(async (req, res) => {
  const { id } = (req.params);
  console.log("id", id);
  const steps = await db.query(
    "SELECT task_id, name, description,completed_at FROM steps WHERE task_id = $1",
    [id]);
  res.json(steps.rows);
  newTaskObject = Object.fromEntries(steps.rows)
  return newTaskObject;
});

const getAllSteps = asyncHandler(async (req, res) => {
  const steps = await db.query("SELECT * FROM steps");
  res.json(steps.rows);
});

const createStep = asyncHandler(async (req, res) => {
  const { taskId, name, description } = req.body

  const step = await db.query("INSERT INTO steps (task_id, name, description) VALUES($1, $2, $3) RETURNING *",
    [taskId, name, description])

  res.json(step)
});

module.exports = { getAllStepsByTaskId, getAllSteps, createStep };
