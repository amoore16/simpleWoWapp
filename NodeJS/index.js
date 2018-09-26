const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./db.js');
var characterController = require('./controllers/characterController.js');

var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));

app.listen(1337, () => console.log('Server started at port : 1337'));

app.use('/characters', characterController);