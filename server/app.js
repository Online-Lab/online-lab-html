/**
 * Main application file
 */

'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var config = require('./config/environment');
// Setup server
var app = express();
var server = require('http').createServer(app);
require('./config/express')(app);
require('./routes')(app);
var proxyMiddleware = require('http-proxy-middleware')
var proxyApi = require('./config/proxy_api.conf')

// Start server
server.listen(config.port, config.ip, function () {
  console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
});

// Expose app
exports = module.exports = app;

//Proxy
if (process.env.PROXY_API_DISABLED == 'true') { return; }

proxyApi.config.match.forEach(function(m){
  app.use(proxyMiddleware(m, {
    target: proxyApi.config.target,
    changeOrigin: true
  }));
});


// var gzippo = require('gzippo')
// var express = require('express')
// var app = express()

// //app config
// app.set('port', (process.env.PORT || 5001))

// app.use(gzippo.staticGzip(__dirname + ((process.env.NPM_CONFIG_PRODUCTION == 'true') ? '/dist/public' : '')))

// app.listen(app.get('port'), function() {
//   console.log("Node app is running at localhost:" + app.get('port'))
// })