const db = require("../config/dbConfig");
const asyncHandler = require("express-async-handler");


const getAllStepsByTaskId = asyncHandler(async (req, res) => {
  const {id} = (req.params);
  console.log("id", id);
  const steps = await db.query(
    "SELECT task_id, name, description,completed_at FROM steps WHERE task_id = $1",
   [id]);
    res.json(steps.rows);
    newTaskObject = Object.fromEntries(steps.rows)
    return newTaskObject;
  });
