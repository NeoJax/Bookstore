DROP DATABASE IF EXISTS bookstore;
CREATE DATABASE bookstore;

\c bookstore;

CREATE TABLE books (
  title VARCHAR(255) NOT NULL,
	author VARCHAR(255) NOT NULL,
	genre VARCHAR(255) NOT NULL,
	height INTEGER NOT NULL,
	publisher VARCHAR(255) NOT NULL
);

\COPY products FROM './grocery.csv' DELIMITER ',' CSV HEADER;;
