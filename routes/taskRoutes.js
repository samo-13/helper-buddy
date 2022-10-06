const express = require("express");
const taskTemplate = require("../config/taskInfo.json");
const {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
  getAllStepsByTaskId,
} = require("../controllers/taskControllers");

const router = express.Router();

router.route("/").get(getAllTasks).post(createTask);
router.route("/templates/:id").get((req, res) => res.json(taskTemplate))
router.route("/:id").get(getTask).delete(deleteTask);


// router.route("/:id/steps").get(getAllStepsByTaskId).post(createTask);

module.exports = router;
