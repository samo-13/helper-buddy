const db = require("../config/dbConfig");
const asyncHandler = require("express-async-handler");

const getAllStepsByTaskId = asyncHandler(async (req, res) => {
  const { task_id } = parseInt(req.params.id);
  const steps = await db.query(`SELECT name, description, id FROM steps WHERE task_id = ${id}`);
    if (err) {
      throw err
    }
    res.status(200).json(results.rows)
    console.log(steps);
    return steps;
  });