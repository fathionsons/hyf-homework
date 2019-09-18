create database Meal_Sharing_Database;
use Meal_Sharing_Database;
set names utf8mb4;
CREATE TABLE `meal`(
	`id` int(10) unsigned NOT NULL auto_increment,
	`title` varchar(255) NOT NULL,
	`description` text NULL DEFAULT NULL,
	`location` varchar(255) NOT NULL,
	`when` datetime NOT NULL,
	`max_reservations` int(10) NOT NULL,
	`price` decimal(8, 2),
	`created_date` date NOT NULL,
    PRIMARY KEY (`id`)    
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `reservation`(
	`id` int(10) unsigned NOT NULL auto_increment,
	`number_of_guests` int(10) unsigned NOT NULL,
	`meal_id` int(10) unsigned NOT NULL,
	`created_date` date NOT NULL,
    PRIMARY KEY (`id`),
    CONSTRAINT `Fk_meal` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `review`(
	`id` int(10) unsigned NOT NULL auto_increment,
    `title` varchar(255) NOT NULL,
    `description` text NULL DEFAULT NULL,
    `meal_id` int(10) unsigned NOT NULL,
    `stars` int(10) NOT NULL,
	`created_date` date NOT NULL,
    PRIMARY KEY (`id`),
    CONSTRAINT `Fk_meal_2` FOREIGN KEY (`meal_id`) REFERENCES `meal` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

insert into meal values (null, 'Heavenly porridge', 'Oatmeal porridge with almonds', 'Vilnius', '2019.05.20', 4, '3.55', '2019.08.26');
insert into meal values (null, 'Pulpo gallego','Stewed octopus with paprika', 'Bilbao', '2018.05.17', 6, '9', '2019.07.15'); 
insert into meal values (null, 'Risotto ai funghi', 'Mushroom risotto', 'Rome', '2019.03.29', 2, '12.45', '2019.04.21');
insert into meal values (null, 'Vareniki of your dreams', 'Dumplings with blueberries', 'Kiev', '2017.04.19', 3, '5', '2019.08.07');
insert into meal values (null, 'Pink is the new black', 'Cold beetroot soup', 'Kaunas', '2019.06.17', 4, '2.50','2019.08.27');

insert into reservation values (null, 2, 4,'2019-08-30'); 
insert into reservation values (null, 5, 1, '2019-08-30'); 
insert into reservation values (null, 1, 2, '2019-08-30'); 
insert into reservation values (null, 2, 3, '2019-08-30'); 
insert into reservation values (null, 4, 5, '2019-08-30'); 

insert into review values (null, 'Amazing experience', 'Food was excellent, staff - super friendly, I am definitely comming back', 2, 5, '2019.08.27'); 
insert into review values (null, 'Worth trying', 'Liked the food, but the service could be more efficient', 3, 4, '2019.08.20'); 
insert into review values (null, 'Could be better', 'Nothing exceptional, and the soup was cold', 5, 3, '2019.08.24'); 
insert into review values (null, 'Waste of time', 'I am sure their home-made sandwiches are made by the staff of a nearby supermarket', 4, 2, '2019.08.15');  
insert into review values (null, 'Average', 'It is fine to try, if you are very hungry', 1, 3, '2019.08.28'); 


SELECT * FROM meal;
insert into meal values (null, 'Spaghetti Bolognese', 'classy Italian dish with a meaty sauce', 'Milan', '2019-02-26', 6, '8.25', '2019-08-18');


SELECT * FROM meal WHERE id = 2; 


UPDATE meal SET title = 'Lasagna', description = 'A heavy cheese bomb' WHERE id = 4;


DELETE FROM meal WHERE id = 4;

 
SELECT * FROM reservation;


insert into reservation values (null, 8, 6, '2019-08-12');

 
SELECT * FROM reservation WHERE id = 5; 

UPDATE reservation SET number_of_guests = 10 WHERE id = 3;


DELETE FROM reservation WHERE id = 2;


SELECT * FROM review; 


insert into review values (null, 'Delicious', 'Food was exceptionally tasty', 6, 5, '2019-08-22');


SELECT * FROM review WHERE id = 1; 
 
UPDATE review SET stars = 1 WHERE id = 4;

 
DELETE FROM review WHERE id = 3;

 
SELECT * FROM meal WHERE price < 9; 


SELECT distinct * FROM meal INNER JOIN reservation ON meal.id = reservation.meal_id WHERE meal.max_reservations > reservation.number_of_guests;


SELECT * FROM meal WHERE title LIKE '%new%'; 

 
SELECT * FROM meal WHERE created_date BETWEEN '2019-08-20' AND '2019-08-28';

SELECT * FROM meal LIMIT 3; 


SELECT meal.id, meal.title, meal.price, review.stars FROM meal INNER JOIN review ON meal.id = review.meal_id WHERE review.stars > 3;

SELECT * FROM reservation WHERE meal_id = 3 order by created_date;


SELECT meal.title, AVG(review.stars) FROM meal LEFT JOIN review ON meal.id = review.meal_id GROUP BY meal.title ORDER BY AVG(review.stars) DESC;
