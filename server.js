require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');

// Web server
const express = require('express');
const morgan = require('morgan');

const PORT = process.env.PORT || 8080;
const app = express();

// middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes/
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');
const stepRoutes = require('./routes/stepRoutes');
const notificationRoutes = require('./routes/notificationRoutes');

app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/templates', taskRoutes);
// app.use("/api/tasks/steps", taskRoutes);
app.use('/api/steps', stepRoutes);
app.use('/api/notifications', notificationRoutes);

// db
const db = require('./config/dbConfig');
const cron = require('node-cron');
const checkNotification = require('./bin/checkNotification');
const sendNotification = require('./bin/sendNotification');

// ------------------------------------------------
// added to test react/server connection (SM)
app.post('/post', (req, res) => {
  console.log('You are connected to React!');
  res.redirect('/');
});
// ------------------------------------------------

db.connect()
  .then(() => {
    console.log('connected to database');

    // notifications is checked daily
    cron.schedule('*/30 * * * * *', async () => {
      console.log('runs every 30 sec');
      const notifications = await checkNotification();

      if (notifications.length > 0) {
        // run only if length > 0
        sendNotification(notifications);
      }
    });

    // server will only start listening if db is connected
    app.listen(PORT, () => {
      console.log(`listening on port ${PORT}`);
    });
  })
  .catch(err => {
    console.log(err);
  });
