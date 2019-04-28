'use strict';

var app = require('./index');
var http = require('http');
 var webSockets = require('./app/lib/web_sockets'); 


var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var mongoString = require('./config/mongo.json').url;

var mongoLogger = function(coll, method, query, doc) {
  global.log.debug(coll + '.' + method + '( ' + JSON.stringify(query) +  ', ' + JSON.stringify(doc) + ' )');
};

mongoose.set('debug', true); // mongoose.set('debug', mongoLogger)

mongoose.connect(mongoString, function(error, db) {
  if (error) {
    global.log.error(error);
  } else {
    global.log.info('Connected to MongoDB');
  }
});



var server = http.Server(app);
server.listen(process.env.PORT || 3500);

server.on('listening', function () {
  global.log.info('Server listening on http://localhost:%d', this.address().port);
});


global.io = require('socket.io').listen(server);
global.io.on('connection', webSockets.newConnection);

