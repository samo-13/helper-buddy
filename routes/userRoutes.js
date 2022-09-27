const express = require("express");

const router = express.Router();

router
  .route("/")
  .get((req, res) => res.json({ message: "get all users" }))
  .post((req, res) => res.json({ message: "post a new user" }));

router
  .route("/:id")
  .get((req, res) => res.json({ message: "get a user" }))
  .put((req, res) => res.json({ message: "update a user" }))
  .delete((req, res) => res.json({ message: "delete a user" }));

module.exports = router;
