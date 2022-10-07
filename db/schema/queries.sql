--createTask
INSERT INTO tasks (name) VALUES ($1)
--startNewTask
INSERT INTO tasks (user_id, name, started_at) VALUES ($1, $2, current_timestamp);
--getTaskById
SELECT * FROM tasks WHERE id = $1;
--getTaskByUser
SELECT * FROM tasks WHERE user_id = $1;
--updateTask(column, value, task_id)
UPDATE tasks SET $1 = $2 WHERE id = $3;
--deleteTaskById(id)
DELETE FROM tasks WHERE id = $1;

--createNewStep
INSERT INTO steps (task_id, name) VALUES ($1, $2);
--startNewStep
INSERT INTO steps (user_id, task_id, started_at) VALUES ($1, $2, current_timestamp);
--getAllStepsByTaskId(task_id) >> loop through steps to complete a task
SELECT name, description, id FROM steps WHERE task_id = $1;
--getAllStepsByUser(user_id, task_id)
SELECT * FROM steps WHERE user_id = $1;
--updateStep(column, value, task_id)
UPDATE steps SET $1 = $2 WHERE id = $3;
--finishStep(step_id, user_id)
UPDATE steps set completed_at = current_timestamp WHERE step_id = $1
--deleteStepById(id)
DELETE FROM steps WHERE id = $1;

--createNewUser
INSERT INTO users (name, email, password) VALUES ($1, $2, $3);
--getUserByEmail(email)
SELECT name, email FROM users WHERE email = $1;
--updateUser(column, value, user_id)
UPDATE users SET $1 = $2 WHERE id = $3;
--deleteUser(id)
DELETE FROM users WHERE id = $1;

--createNewNotification(taskId, stepId, userId, message)
INSERT INTO notifications (task_id, step_id, user_id, message, created_at) VALUES ($1, $2, $3, $4, current_timestamp);
--getNotificationsByUser(userId)
SELECT * FROM notifications WHERE user_id = $1;
--updateReadNotification(id)
UPDATE notifications SET read = true WHERE id = $1;
--deleteNotification(id)
DELETE FROM notifications WHERE id = $1;
