const db = require("../config/dbConfig");
const asyncHandler = require("express-async-handler");

const updateStep = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { completed_at } = req.body;

  const updatedStep = await db.query(
    "UPDATE steps SET completed_at = $1 WHERE id = $2 RETURNING *",
    [completed_at, id]
  );
  

  res.json({ message: `Step#${updatedStep.rows[0].id} updated` });
});

module.exports = { updateStep };