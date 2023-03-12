CREATE DATABASE army;
USE army;

CREATE TABLE heroes (
  id INT(10) AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  weapon_id INT(10),
  created_at TIMESTAMP DEFAULT NOW(),
  modify_at TIMESTAMP ON UPDATE NOW(),
  FOREIGN KEY (weapon_id) REFERENCES weapons(id)
);

CREATE TABLE weapons(
id int(10) auto_increment primary key,
name VARCHAR(255) NOT NULL,
color enum('silver','black','red','green','blue'),
material enum('iron','metal','plastic','aluminium','steel','diamond','vibranium'),
img_src varchar(255),
created_at timestamp DEFAULT NOW(),
modified_at timestamp ON UPDATE NOW()
);

INSERT INTO weapons (name,color,material) values
('swords','silver','iron'),
('nuke','green','iron'),
('m16','black','iron'),
('keter chair','red','plastic');

SELECT * FROM weapons;

