const { Pool } = require("pg");

const pool = new Pool({
  user: "test",
  password: "test",
  host: "localhost",
  port: 5432,
  database: "helper_buddy",
});

module.exports = pool;
