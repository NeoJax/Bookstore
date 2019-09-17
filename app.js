const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const index = require('./routes/index.js');
const login = require('./routes/login.js');
const signup = require('./routes/signup.js');
const admin = require('./routes/admin.js');
const user = require('./routes/user.js');
const details = require('./routes/details.js');
const results = require('./routes/results.js');

app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.static(path.join(__dirname, '/')));
app.set('port', process.env.PORT || 3000);
app.use(cookieParser());
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: 'Lolwut',
  cookie: {
    maxAge: 6000000,
    httpOnly: false,
  },
}));

app.use('/', index);
app.use('/login', login);
app.use('/signup', signup);
app.use('/user', user);
app.use('/admin', admin);
app.use('/details', details);
app.use('/results', results);

app.listen(app.get('port'), () => console.log(`http://localhost:${app.get('port')}`));
