var development = require('./env/development')
  , production = require('./env/production')
  , path = require('path')
  , extend = require('util')._extend;

var defaults = {
  root: path.normalize(__dirname + '/..')
};


// Expose
module.exports = {
  development: extend(development, defaults),
  production: extend(production, defaults)
}[process.env.NODE_ENV || 'development'];
