var fs = require('fs')
  , express = require('express')
  , mongoose = require('mongoose')
  , bodyParser = require('body-parser')
  , config = require('./config/config');

var app = express();
var port = process.env.PORT || 3000;

// Connect to mongodb
var connect = function () {
  var options = { server: { socketOptions: { keepAlive: 1 } } };
  mongoose.connect(config.db, options);
};
connect();
mongoose.connection.on('error', console.log);
mongoose.connection.on('disconnected', connect);

// Bootstrap models
fs.readdirSync(__dirname + '/app/models').forEach(function (file) {
  if (~file.indexOf('.js')) require(__dirname + '/app/models/' + file);
});

app.use(bodyParser());

require('./config/routes')(app);

app.listen(port);
