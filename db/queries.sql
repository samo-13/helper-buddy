--createNewTask can be leveraged to initialize new instance of task, or user-created custom task
INSERT INTO tasks (user_id, name, started_at) VALUES ($1, $2, current_timestamp)
--getTaskById
SELECT * FROM tasks WHERE id = $1;
--getTaskByUser
SELECT * FROM tasks WHERE user_id = $1;
--updateTask(column, value, task_id)
UPDATE tasks SET $1 = $2 WHERE id = $3;
--deleteTaskById
DELETE FROM tasks WHERE id = $1;

--createNewStep can be leveraged to initialize new instance of step, or user-created custom step
INSERT INTO steps (user_id, task_id, name) VALUES ($1, $2, $3)
--getAllStepsByTaskId(task_id)
SELECT * FROM steps WHERE task_id = $1;
--getAllStepsByUser(user_id, task_id)
SELECT * FROM steps WHERE user_id = $1;
--updateTask(column, value, task_id)
UPDATE tasks SET $1 = $2 WHERE id = $3;
--deleteTaskById
DELETE FROM tasks WHERE id = $1;