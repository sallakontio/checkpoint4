-- Create database 
create database kitchen
-- Create table 
create table tableware ( 
id SERIAL PRIMARY KEY,  
name varchar(255) NOT NULL, 
qty int NOT NULL
)
