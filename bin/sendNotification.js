const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken, {
  lazyLoading: true,
});

const cron = require('node-cron');
const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
dayjs.extend(utc);

const now = dayjs(new Date()).format();

const sendNotification = notifications => {
  // notifications params returns an arracy of notifiction object
  notifications.forEach(notification => {
    // const cronExpression = '06 20 * * *';
    // code for logic regarding the date or frequency of notification

    const { message, user_phone } = notification;

    // cron.schedule(cronExpression, () => {
    //   client.messages
    //     .create({
    //       body: message,
    //       from: '+16402033247',
    //       to: user_phone,
    //     })
    //     .then(() => console.log('text sent @', now))
    //     .catch(err => console.error(err));
    // });
  });
};

module.exports = sendNotification;
