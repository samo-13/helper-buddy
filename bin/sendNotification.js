// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// const client = require('twilio')(accountSid, authToken, {
//   lazyLoading: true,
// });

const cron = require('node-cron');
// const dayjs = require('dayjs')
// const utc = require('dayjs/plugin/utc')
// dayjs.extend(utc)

// const now = dayjs(new Date()).format()
const sendNotification = () => {
  const scheduledText = cron.schedule('*/2 * * * * *', () => {
    // client.messages
    // .create({
    //    body: `Scheduled Task sent @ ${now}`,
    //    from: '+16402033247',
    //    to: '+818044031209'
    //  })
    // .then(message => console.log('text sent @', now));

    console.log('all good');
  });
};

module.exports = sendNotification;
