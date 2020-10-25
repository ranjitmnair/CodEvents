CREATE DATABASE dbms

CREATE TABLE `dbms`.`users` ( `User_Id` VARCHAR(25) NOT NULL PRIMARY KEY, `F_Name` VARCHAR(25) NOT NULL , `L_Name` VARCHAR(25) NOT NULL , `password` VARCHAR(25) NOT NULL , `DOB` DATE NOT NULL ) ENGINE = MyISAM;

CREATE TABLE `dbms`.`organisers` ( `id` VARCHAR(200) NOT NULL PRIMARY KEY, `name` VARCHAR(200) NOT NULL , `password` VARCHAR(250) NOT NULL ) ENGINE = InnoDB;


CREATE TABLE `dbms`.`hackathons` ( `id` INT(50) NOT NULL AUTO_INCREMENT , `organiser_id` VARCHAR(50) NOT NULL , `Name` VARCHAR(100) NOT NULL , `Venue` VARCHAR(100) NOT NULL , `DATE` DATE NOT NULL , `TIME` TIME(6) NOT NULL , `Sponsors` VARCHAR(50) NULL , `Description` VARCHAR(500) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;


ALTER TABLE `hackathons` ADD CONSTRAINT `hackathons-organiser` FOREIGN KEY (`organiser_id`) REFERENCES `organisers`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;


CREATE TABLE `dbms`.`codingcontests` ( `id` INT(50) NOT NULL AUTO_INCREMENT , `organiser_id` VARCHAR(50) NOT NULL , `Name` VARCHAR(100) NOT NULL , `Venue` VARCHAR(100) NOT NULL , `DATE` DATE NOT NULL , `TIME` TIME(6) NOT NULL , `Sponsors` VARCHAR(50) NULL , `Description` VARCHAR(500) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;


ALTER TABLE `codingcontests` ADD CONSTRAINT `codingcontests-organiser` FOREIGN KEY (`organiser_id`) REFERENCES `organisers`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;


CREATE TABLE `dbms`.`webinars` ( `id` INT(50) NOT NULL AUTO_INCREMENT , `organiser_id` VARCHAR(50) NOT NULL , `Name` VARCHAR(100) NOT NULL , `Venue` VARCHAR(100) NOT NULL , `DATE` DATE NOT NULL , `TIME` TIME(6) NOT NULL , `Sponsors` VARCHAR(50) NULL , `Description` VARCHAR(500) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;


ALTER TABLE `webinars` ADD CONSTRAINT `webinars-organiser` FOREIGN KEY (`organiser_id`) REFERENCES `organisers`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;



CREATE TABLE `dbms`.`organiser-created-events` ( `organiser_id` VARCHAR(25) NOT NULL , `name` VARCHAR(50) NOT NULL , `venue` VARCHAR(50) NOT NULL , `date` DATE NOT NULL , `time` TIME(6) NOT NULL ) ENGINE = InnoDB;


ALTER TABLE `organiser-created-events` ADD CONSTRAINT `created events organiser-id` FOREIGN KEY (`organiser_id`) REFERENCES `organisers`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;


CREATE TABLE `dbms`.`user-registered-events` ( `user_id` VARCHAR(200) NOT NULL , `hackathon_id` INT(15) NULL , `webinar_id` INT(15) NULL , `codingcontest_id` INT(15) NULL , `eventname` VARCHAR(100) NOT NULL , `DATE` DATE NOT NULL , `TIME` TIME NOT NULL , `Venue` VARCHAR(50) NOT NULL ) ENGINE = InnoDB;

ALTER TABLE `user-registered-events` ADD CONSTRAINT `userid-created-events` FOREIGN KEY (`user_id`) REFERENCES `users`(`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE `user-registered-events` ADD CONSTRAINT `hackathon-id-created-events` FOREIGN KEY (`hackathon_id`) REFERENCES `hackathons`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE `user-registered-events` ADD CONSTRAINT `codingcontests-id-created-events` FOREIGN KEY (`codingcontest_id`) REFERENCES `codingcontests`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE `user-registered-events` ADD CONSTRAINT `webinars-id-created-events` FOREIGN KEY (`webinar_id`) REFERENCES `webinars`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;


CREATE TABLE `dbms`.`announcements` ( `announcement_id` INT NOT NULL AUTO_INCREMENT , `message` VARCHAR(500) NOT NULL , PRIMARY KEY (`announcement_id`)) ENGINE = InnoDB;

CREATE TABLE `dbms`.`admin` ( `admin_id` VARCHAR(20) NOT NULL , `password` VARCHAR(200) NOT NULL , PRIMARY KEY (`admin_id`)) ENGINE = InnoDB;

CREATE TABLE `dbms`.`resources` ( `resource_id` INT NOT NULL AUTO_INCREMENT , `resource` VARCHAR(500) NOT NULL , PRIMARY KEY (`resource_id`)) ENGINE = InnoDB;

