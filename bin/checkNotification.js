const cron = require('node-cron');
const db = require('../config/dbConfig');

const sendNotification = require('./sendNotification');

const checkNotification = () => {
  cron.schedule('40 40 15 * * *', async () => {
    console.log('this is run at 12am everyday');

    const res = await db.query('SELECT * from notifications;');
    const notificationList = res.rows;

    notificationList.forEach(notification => {
      const user_phone = notification.user_phone;
      const message = notification.message;
      // other properties such as date and repeated function will be needed fro the cron express in sendNotification

      sendNotification(user_phone, message);
    });
  });
};

module.exports = checkNotification;
