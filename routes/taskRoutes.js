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
router.route("/templates").get((req, res) => res.json(taskTemplate));
router.route("/templates/:id").get((req, res) => res.json(taskTemplate));
<<<<<<< HEAD
=======
// router.route("/templates/new").get((req, res) => res.json(taskTemplate).post(createTask));
>>>>>>> b39445b5991fc01734d32d64121c94dcc1bf34b8
router.route("/:id").get(getTask).delete(deleteTask);
router.route("/new").post(createTask);


// router.route("/:id/steps").get(getAllStepsByTaskId).post(createTask);

module.exports = router;