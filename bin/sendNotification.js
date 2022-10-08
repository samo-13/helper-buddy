const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken, {
  lazyLoading: true,
});

const sendText = (message, userPhoneNumber) => {
  client.messages
    .create({
      body: message,
      from: '+16402033247',
      to: userPhoneNumber,
    })
    .then(message => console.log(message.sid));
};

module.exports = sendText;
