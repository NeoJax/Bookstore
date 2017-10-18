const pgp = require('pg-promise')();

const connectionString = process.env.DATABASE_URL || 'postgresql://postgres@localhost:5432/bookstore';
const db = pgp(connectionString);

function createBook(title, author, genre, height, publisher) {
  return db.any(
    'INSERT INTO bookstore (title, author, genre, height, publisher) VALUES ($1, $2, $3, $4, $5)',
    [title, author, genre, height, publisher],
  )
    .catch((err) => {
      console.log(err);
    });
}

function grabBook(type, text) {
  return db.any(`SELECT * FROM books WHERE ${type}='${text}'`)
    .catch((err) => {
      console.log(err);
    });
}

function grabDetails(title) {
  return db.one(`SELECT * FROM books WHERE title='${title}'`, [title])
    .catch((err) => {
      console.log(err);
    });
}

function updateBook(title, genre) {
  return db.any('UPDATE bookstore SET title=$1 WHERE genre=$2', [title, genre])
    .catch((err) => {
      console.log(err);
    });
}

function deleteBook(title) {
  return db.any('DELETE FROM bookstore WHERE title=$1', [title])
    .catch((err) => {
      console.log(err);
    });
}

module.exports = {
  createBook,
  grabBook,
  grabDetails,
  updateBook,
  deleteBook,
};
