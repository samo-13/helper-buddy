const db = require('../config/dbConfig');

const checkNotification = async () => {
  const res = await db.query('SELECT * from notifications;');

  return res.rows;
};

module.exports = checkNotification;
