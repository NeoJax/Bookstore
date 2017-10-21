const { expect } = require('chai');
const {
  grabAll,
  createBook,
  grabBook,
  grabDetails,
  updateBook,
  deleteBook,
} = require('../database');

describe('testing the database.js functions', () => {
  // Before each refresh the database
  describe('grabAll', () => {
    // it('should be a function', (done) => {
    //   expect(grabAll()).to.be.function;
    // });
    it('should return a specific first book', (done) => {
      grabAll(10, 0).then((data) => {
        expect(data[0].title).to.equal('Fundamentals of Wavelets');
        done();
      });
    });
    context('testing if it gives the right amount of rows', () => {
      it('should return an array', (done) => {
        grabAll(10, 0).then((data) => {
          expect(data).to.be.an('array');
          done();
        });
      });
      it('should return an object in the array', (done) => {
        grabAll(10, 0).then((data) => {
          expect(data[0]).to.be.an('object');
          done();
        });
      });
      it('should have 10 amount of rows', (done) => {
        grabAll(10, 0).then((data) => {
          expect(data.length).to.equal(10);
          done();
        });
      });
      it('should have 5 amount of rows', (done) => {
        grabAll(5, 0).then((data) => {
          expect(data.length).to.equal(5);
          done();
        });
      });
      it('should have 2 amount of rows', (done) => {
        grabAll(2, 0).then((data) => {
          expect(data.length).to.equal(2);
          done();
        });
      });
      it('should have 4 amount of rows', (done) => {
        grabAll(4, 0).then((data) => {
          expect(data.length).to.equal(4);
          done();
        });
      });
      it('should have 25 amount of rows', (done) => {
        grabAll(25, 0).then((data) => {
          expect(data.length).to.equal(25);
          done();
        });
      });
    });
    
    context('testing if there is an error', () => {
      it('should return an error specifying limit', (done) => {
        grabAll(-5, 0).then((data) => {
          expect(data).to.be.an('error');
          done();
        });
      });
      it('should return an error specifying offset', (done) => {
        grabAll(10, -50).then((data) => {
          expect(data).to.be.an('error');
          done();
        });
      });
    });
  });

  describe('createBook', () => {
    // it('should be a function', (done) => {
    //
    //   done();
    // });
    context('testing with all information', () => {
      it('should be in the new database when queried', (done) => {

        done();
      });
    });
    context('testing missing a field', () => {
      it('should specify the specific field', (done) => {

        done();
      });
    });
    context('testing missing multiple fields', () => {
      it('should specify the multiple fields missing', (done) => {

        done();
      });
      it('should specify all missing fields', (done) => {

        done();
      });
    });
  });

  describe('grabBook', () => {
    // it('should be a function', (done) => {
    //
    //   done();
    // });
    context('testing with a specific title', () => {
      it('should return a single book', (done) => {
        grabBook('title', 'Flashpoint').then((data) => {
          expect(data.title).to.equal('Flashpoint');
        });
        done();
      });
      it('should grab the title of the book', (done) => {

        done();
      });
    });
    context('testing with a specific author', () => {
      it('should grab the books associated with the author', (done) => {

        done();
      });
    });
    context('testing with a specific genre', () => {
      it('should grab all books that are in the genre', (done) => {

        done();
      });
    });
    context('testing with wrong information', () => {
      it('should return that there are no books under that category with that name', (done) => {

        done();
      });
    });
  });

  describe('grabDetails', () => {
    // it('should be a function', (done) => {
    //
    //   done();
    // });
    context('testing with a specific title', () => {
      it('should return a single book', (done) => {

        done();
      });
      it('should return all details of that book', (done) => {

        done();
      });
    });
    context('testing with a wrong title', () => {
      it('should return that there is no book under that name', (done) => {

        done();
      });
    });
  });

  describe('updateBook', () => {
    // it('should be a function', (done) => {
    //
    //   done();
    // });
    context('updating a book with a new title', () => {
      it('should not return an error', (done) => {

        done();
      });
    });
    context('updating with completely new information', () => {

    });
    context('updating a book that is not found', () => {

    });
  });

  describe('deleteBook', () => {
    // it('should be a function', () => {
    //
    // });
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
