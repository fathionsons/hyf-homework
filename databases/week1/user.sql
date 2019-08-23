--Fathi week 1 databases ;
SELECT COUNT(id) FROM task;
SELECT count(id) from task where due_date is null;
select task.title, status.name from task inner join status on task.status_id = status.id where status.name ='Done';
select task.title, status.name from task inner join status on task.status_id = status.id where status.name='Not started' or status.name ='In progress';
select * from task order by created desc;
select * from task order by created desc limit 2;
select task.title, task.due_date from task where title  like '%database%' or description like '%database%';
select task.title, status.name as new_title from task inner join status on task.status_id = status.id;
select status.name as names, count(task.status_id) from task inner join status on task.status_id = status.id group by names;
select status.name, count(task.status_id) from task inner join status on task.status_id = status.id group by status.name;
--Fathi week 1 databases 