const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const index = require('./routes/index.js');

app.set('view engine', 'pug');
app.set('views', './views');
app.set('port', process.env.PORT || 3000);

app.use('/', index);

const server = app.listen(app.get('port'), () => console.log(`listening to port ' ${app.get('port')}`));
