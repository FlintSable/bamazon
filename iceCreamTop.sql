CREATE DATABASE ICECREAMER2;

DELETE FROM top5000;

 LOAD DATA LOCAL INFILE  
"/Users/poweruser/Desktop/TopSongs.csv"
INTO TABLE songs  
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
(id,artist,title,year,popall,popusa,popuk,popeurope,popworld);

CREATE TABLE  songs(
  id INTEGER(50) AUTO_INCREMENT NOT NULL,
  -- Makes a string column called "name" which cannot contain null --
  title VARCHAR(250),
  -- Makes a boolean column called "has_pet" which cannot contain null --
  artist VARCHAR(250),
  -- Makes a sting column called "pet_name" --
  genre VARCHAR(30),
  -- Makes an numeric col
  PRIMARY KEY (id)
);

SET SESSION sql_mode = '';
-- use sta
USE icecreamer2;

CREATE TABLE Top5000(
	id INTEGER(11) AUTO_INCREMENT NOT NULL,
	artist VARCHAR(50) NOT NULL,
	track VARCHAR(255),
	year INT(10) NOT NULL,
	world_popularity DECIMAL(10,4),
	usa_popularity DECIMAL(10,4),
	uk_popularity DECIMAL(10,4),
	euro_popularity DECIMAL(10,4),
	other_eu_popularity DECIMAL(10,4),
	PRIMARY KEY (id)
);

create table topAlbums(
	id INTEGER(11) AUTO_INCREMENT NOT NULL,
	artist VARCHAR(50) NOT NULL,
	track VARCHAR(255),
	year INT(10) NOT NULL,
	world_popularity DECIMAL(10,4),
	usa_popularity DECIMAL(10,4),
	uk_popularity DECIMAL(10,4),
	euro_popularity DECIMAL(10,4),
	other_eu_popularity DECIMAL(10,4),
	PRIMARY KEY (id)
	);


CREATE TABLE top5000 (
 id INT NOT NULL,
 artist VARCHAR(100) NULL,
 song VARCHAR(100) NULL,
 year INT NULL,
 raw_total DECIMAL(10,4) NULL,
 raw_usa DECIMAL(10,4) NULL,
 raw_uk DECIMAL(10,4) NULL,
 raw_eur DECIMAL(10,4) NULL,
 raw_row DECIMAL(10,4) NULL,
 PRIMARY KEY (id)
);

ALTER TABLE Top5000
MODIFY COLUMN world_popularity DECIMAL(10,4),
MODIFY COLUMN usa_popularity DECIMAL(10,4),
MODIFY COLUMN uk_popularity DECIMAL(10,4),
MODIFY COLUMN euro_popularity DECIMAL(10,4),
MODIFY COLUMN other_eu_popularity DECIMAL(10,4);






INSERT INTO songs (title, artist, genre)
VALUES ('Run', 'Beastie', 'rap'),
	('Dat $tick', 'Rich Chiga', 'rap'),
	('Lari', 'Carolina Lia', 'rock'),
	('viral', 'viral', 'rock'),
	('viral', 'viral', 'rock');


ALTER TABLE songs
MODIFY COLUMN ID int AUTO_INCREMENT NOT NULL;

ALTER TABLE songs
ADD PRIMARY KEY (ID);