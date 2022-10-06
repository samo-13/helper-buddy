const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.DB_USER || "test",
  password: process.env.DB_PASS || "test",
  host: "localhost",
  port: 5432,
  database: process.env.DB_NAME || "helper_buddy",
});

module.exports = pool;
