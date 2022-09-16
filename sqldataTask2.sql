-- Create table Office 
create table office ( 
id SERIAL PRIMARY KEY,  
name varchar(255) NOT NULL, 
location varchar(255) NOT null, 
starting_year int not null 
)

-- Add offices 
insert into office (name, location, starting_year) values ('Academy Finland', 'Espoo', 2017)
insert into office (name, location, starting_year) values ('Academy Sweden', 'Kista', 2015)
insert into office (name, location, starting_year) values ('Academy Germany', 'Munchen', 2018)

-- Add office_id column to tableware 
alter table tableware add office_id int

-- Add foreign key 
alter table tableware add foreign key (office_id) references office(id)

-- Updating tableware objects to belong to Espoo office
update tableware set office_id = 1 where id = 1
update tableware set office_id = 1 where id = 2
update tableware set office_id = 1 where id = 3
update tableware set office_id = 1 where id = 4
update tableware set office_id = 1 where id = 5

