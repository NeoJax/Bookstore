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

CREATE TABLE users (
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  access VARCHAR(255) NOT NULL
);

\COPY books FROM './db/books.csv' DELIMITER ',' CSV HEADER;

\COPY users FROM './db/users.csv' DELIMITER ',' CSV HEADER;
