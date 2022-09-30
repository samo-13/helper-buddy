const express = require("express");
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

router.route("/:id").get(getTask).put(updateTask).delete(deleteTask);

router.route("/steps").get(getAllStepsByTaskId).post(createTask);

module.exports = router;
