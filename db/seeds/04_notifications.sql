-- repeat completed task, step_id = null
INSERT INTO notifications (task_id, user_phone, message) VALUES (NULL, '+818044031209', 'notification sent!');
-- finish incomplete task, step_id = not null
-- INSERT INTO notifications (task_id, step_id, user_id, read, message) VALUES (NULL, 5, 1, false, 'Do you want to finish this task right now?');

