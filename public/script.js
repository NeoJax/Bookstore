const bcrypt = require('bcrypt');
const {
  grabUser,
} = require('../database');

function checkUser(username, pass) {
  return grabUser(username).then((data) => {
    let user;
    if (data.password === pass) {
      user = {
        username: data.username,
        access: data.access,
        check: true,
      };
    }
    bcrypt.compare(pass, data.password, (err, res) => {
      if (res === true) {
        user = {
          username: data.username,
          access: data.access,
          check: true,
        };
      }
    });
    if (typeof user === 'object') {
      return user;
    }
    return false;
  });
}

module.exports = {
  checkUser,
};
