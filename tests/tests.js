const { expect } = require('chai');

describe('testing the database.js functions', () => {
  // Before each refresh the database
  describe('grabAll', () => {
    context('testing if it gives the right amount of rows', () => {

    });
    context('testing if there is an error', () => {

    });
  });
  describe('createBook', () => {
    context('testing with all information', () => {

    });
    context('testing missing a field', () => {

    });
    context('testing missing all fields', () => {

    });
  });
  describe('grabBook', () => {
    context('testing with a specific title', () => {

    });
    context('testing with a specific author', () => {

    });
    context('testing with a specific genre', () => {

    });
    context('testing with wrong information', () => {

    });
  });
  describe('grabDetails', () => {
    context('testing with a specific title', () => {

    });
    context('testing with a wrong title', () => {

    });
  });
  describe('updateBook', () => {
    context('updating a book with a new title', () => {

    });
    context('updating with completely new information', () => {

    });
    context('updating a book that is not found', () => {

    });
  });
  describe('deleteBook', () => {
    context('deleting a book', () => {

    });
    context('deleting a book that is not found', () => {

    });
  });
});

describe('testing the express server', () => {
  // Before each refresh the server
  describe('connection to admin page', () => {

  });
  describe('connection to details page', () => {

  });
  describe('connection to index page', () => {

  });
  describe('connection to results page', () => {

  });
});

describe('testing the database itself', () => {
  // Before each refresh the database
  describe('testing select', () => {

  });
  describe('testing insert', () => {

  });
  describe('testing delete', () => {

  });
  describe('testing update', () => {

  });
});
