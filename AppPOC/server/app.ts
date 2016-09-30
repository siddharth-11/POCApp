import express = require('express');
import {urlencoded, json} from 'body-parser';
import errorHandler = require('errorhandler');
import cors = require('cors');
import {join} from 'path';

import controller = require('./module/serverPOC/controllers/data-controller');

var app = express();

// Configuration

app.set('port', 5000);
app.set('views', join( __dirname, '/views') ); // path.join on windows
//app.set('view engine', 'vash');
app.set('view options', { layout: false });
app.use(urlencoded({ extended: true }));
app.use(json());
app.use(cors());
app.use(express.static(join(__dirname, '/../client')));
app.use(errorHandler());

// Routes
app.use('/api/data', controller);


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

export var App = app;
