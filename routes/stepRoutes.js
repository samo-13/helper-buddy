const express = require("express");

const router = express.Router();

router
  .route("/")
  .get((req, res) => res.json({ message: "get all steps" }))
  .post((req, res) => res.json({ message: "post a new step" }));

router
  .route("/:id")
  .get((req, res) => res.json({ message: "get a step" }))
  .put((req, res) => res.json({ message: "update a step" }))
  .delete((req, res) => res.json({ message: "delete a step" }));

module.exports = router;
