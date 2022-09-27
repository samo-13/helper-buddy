const express = require("express");

const router = express.Router();

router
  .route("/")
  .get((req, res) => res.json({ message: "get all notifications" }))
  .post((req, res) => res.json({ message: "post a new notification" }));

router
  .route("/:id")
  .get((req, res) => res.json({ message: "get a notification" }))
  .put((req, res) => res.json({ message: "update a notification" }))
  .delete((req, res) => res.json({ message: "delete a notification" }));

module.exports = router;
