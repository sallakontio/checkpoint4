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

