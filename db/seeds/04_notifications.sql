-- repeat completed task, step_id = null
INSERT INTO notifications (task_id, step_id, user_id, read, message) VALUES (1, NULL, 1, false, 'Do you want to start this task right now?');
-- finish incomplete task, step_id = not null
INSERT INTO notifications (task_id, step_id, user_id, read, message) VALUES (2, 5, 1, false, 'Do you want to finish this task right now?');

