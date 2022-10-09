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

const sendNotification = (user_phone, message) => {
  client.messages
    .create({
      body: message,
      from: '+16402033247',
      to: user_phone,
    })
    .then(() => console.log('text sent @', now))
    .catch(err => console.error(err));
};

module.exports = sendNotification;
