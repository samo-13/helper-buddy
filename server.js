require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");

// Web server
const express = require("express");
const morgan = require("morgan");

const PORT = process.env.PORT || 8080;
const app = express();

// middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes/
const userRoutes = require("./routes/userRoutes");
const taskRoutes = require("./routes/taskRoutes");
const stepRoutes = require("./routes/stepRoutes");
const notificationRoutes = require("./routes/notificationRoutes");

app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/tasks/steps", taskRoutes);
app.use("/api/steps", stepRoutes);
app.use("/api/notifications", notificationRoutes);

// db
const db = require("./config/dbConfig");

// ------------------------------------------------
// added to test react/server connection (SM)
app.post("/post", (req, res) => {
  console.log("You are connected to React!");
  res.redirect("/");
});
// ------------------------------------------------

db.connect()
  .then(() => {
    console.log("connected to database");

    // server will only start listening if db is connected
    app.listen(PORT, () => {
      console.log(`listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
