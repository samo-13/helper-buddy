-- Drop and recreate Users table (Example)

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS tasks CASCADE;
DROP TABLE IF EXISTS steps CASCADE;
DROP TABLE IF EXISTS notifications CASCADE;


CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE tasks (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  started_at TIMESTAMP,
  completed_at TIMESTAMP,
  duration TIME,
  total_time BIGINT
);


CREATE TABLE steps (
  id SERIAL PRIMARY KEY NOT NULL,
  order_by INTEGER,
  task_id INTEGER REFERENCES tasks(id) ON DELETE CASCADE,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  description VARCHAR(255),
  started_at VARCHAR(255),
  completed_at VARCHAR(255)
);

CREATE TABLE notifications (
  id SERIAL PRIMARY KEY NOT NULL,
  task_id INTEGER REFERENCES tasks(id) ON DELETE CASCADE,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  read BOOLEAN,
  message TEXT,
  created_at TIMESTAMP
);


