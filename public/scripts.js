const {
  grabUser,
} = require('../database');

function checkUser(username, pass) {
  grabUser(username).then((data) => {
    if (data.password === pass) {
      console.log('yay!');
    }
  });
}

module.exports = {
  checkUser,
};
