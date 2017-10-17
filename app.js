const express = require('express');
const bodyParser = require('body-parser');
const pug = require('pug');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const index = require('./routes/index.js');
const details = require('./routes/details.js');
const results = require('./routes/results.js');

app.set('view engine', 'pug');
app.set('views', './views');
app.set('port', process.env.PORT || 3000);

app.use('/', index);
app.use('/details', details);
app.use('/results', results);

const server = app.listen(app.get('port'), () => console.log(`listening to port ' ${app.get('port')}`));
