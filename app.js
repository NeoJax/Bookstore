const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const index = require('./routes/index.js');
const details = require('./routes/details.js');
const results = require('./routes/results.js');
const admin = require('./routes/admin.js');

app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.static(path.join(__dirname, 'public')));
app.set('port', process.env.PORT || 3000);

app.use('/', index);
app.use('/details', details);
app.use('/results', results);
app.use('/admin', admin);

const server = app.listen(app.get('port'), () => console.log(`listening to port ' ${app.get('port')}`));
