"use strict";
var express = require('express');
var body_parser_1 = require('body-parser');
var errorHandler = require('errorhandler');
var cors = require('cors');
var path_1 = require('path');
var controller = require('./module/serverPOC/controllers/data-controller');
var app = express();
// Configuration
app.set('port', 5000);
app.set('views', path_1.join(__dirname, '/views')); // path.join on windows
//app.set('view engine', 'vash');
app.set('view options', { layout: false });
app.use(body_parser_1.urlencoded({ extended: true }));
app.use(body_parser_1.json());
app.use(cors());
app.use(express.static(path_1.join(__dirname, '/../client')));
app.use(errorHandler());
// Routes
app.use('/api/data', controller);
app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});
exports.App = app;

//# sourceMappingURL=source-maps/app.js.map
