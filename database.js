const pgp = require('pg-promise')();

const connectionString = process.env.DATABASE_URL || 'postgresql://postgres@localhost:5432/bookstore';
const db = pgp(connectionString);

function grabAll(limit, offset) {
  return db.query(`SELECT * FROM books LIMIT ${limit} OFFSET ${offset}`)
    .catch((err) => {
      console.log(err);
    });
}

function createBook(title, author, genre, height, publisher) {
  return db.none(`INSERT INTO books
    (title, author, genre, height, publisher) VALUES
    ('${title}', '${author}', '${genre}', '${height}', '${publisher}')`)
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

function updateBook(oldTitle, newTitle, newAuthor, newGenre) {
  return db.none(`UPDATE books SET title='${newTitle}', author='${newAuthor}', genre='${newGenre}' WHERE title='${oldTitle}'`)
    .catch((err) => {
      console.log(err);
    });
}

function deleteBook(title) {
  return db.none(`DELETE FROM books WHERE title='${title}'`)
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
  grabAll,
};
