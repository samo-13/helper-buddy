const db = require("../config/dbConfig");
const asyncHandler = require("express-async-handler");

const updateStep = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { completed_at } = req.body;

  const updatedStep = await db.query(
    "UPDATE steps SET completed_at = $1 WHERE task_id = $2 RETURNING *",
    [name, id]
  );

  res.json({ message: `Task#${updatedTask.rows[0].id} updated` });
});