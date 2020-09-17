### Schema

CREATE DATABASE project2_db;
USE project2_db;

CREATE TABLE users
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(250) NOT NULL,
	PRIMARY KEY (id)
);