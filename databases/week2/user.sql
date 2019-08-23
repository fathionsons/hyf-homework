use hyf19;
     INSERT INTO task (title, description, created, updated, due_date, status_id, user_id) 
     VALUES ('fathi homework 2', 'mysql', '2020', 'fathihygge', NULL, 1, NULL);
    UPDATE task
	SET title = 'newTitle' 
    WHERE id = 20;
    UPDATE task
	SET due_date = '2019-12-05' 
	WHERE id = 10;
    UPDATE task
	SET status_id = 1 
	WHERE id = 3;
    UPDATE task
	SET status_id = 3 
	WHERE id = 1;
    DELETE FROM task 
	WHERE id = 6;

SELECT * from task;