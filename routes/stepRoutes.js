const express = require("express");

const router = express.Router();

const {
  getAllSteps,
  getAllStepsByTaskId,
  createStep
} = require("../controllers/helperFunctions");

router
  .route("/")
  .get(getAllSteps)
  .post(createStep);

router
  .route("/:id")
  .get((req, res) => res.json({ message: "get a step" }))
  .put((req, res) => res.json({ message: "update a step" }))
  .delete((req, res) => res.json({ message: "delete a step" }));

module.exports = router;
