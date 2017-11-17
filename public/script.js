const bcrypt = require('bcrypt');
const {
  grabUser,
} = require('../db/database');

function checkUser(username, pass) {
  return grabUser(username).then((data) => {
    let user;
    let check = false;
    if (data === false) {
      check = 'Wrong Information';
    }
    if (data.password === pass) {
      user = {
        username: data.username,
        access: data.access,
        check: true,
      };
    } else if (data !== false) {
      check = 'Wrong Information';
    }
    bcrypt.compare(pass, data.password, (err, res) => {
      if (res === true) {
        user = {
          username: data.username,
          access: data.access,
          check: true,
        };
      } else if (data !== false) {
        check = 'Wrong Information';
      }
    });
    if (typeof user === 'object') {
      return user;
    }
    return check;
  });
}

module.exports = {
  checkUser,
};
