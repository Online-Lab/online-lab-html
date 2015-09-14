// /**
//  * Main application routes
//  */

// 'use strict';

// var errors = require('./components/errors');

// module.exports = function(app) {

//   // Insert routes below
//   app.use('/api/things', require('./api/thing'));
  
//   // All undefined asset or api routes should return a 404
//   app.route('/:url(api|auth|components|app|bower_components|assets)/*')
//    .get(errors[404]);

//   // All other routes should redirect to the index.html
//   app.route('/*')
//     .get(function(req, res) {
//       res.sendfile(app.get('appPath') + '/index.html');
//     });
// };


'use strict';

var express = require('express');

module.exports = function(app) {

  // Serve all asset files from necessary directories
  // 
  var appPath = app.get('appPath') 
  app.use('/bower_components',  express.static(appPath + "/bower_components/"));
  app.use('/app/',              express.static(appPath + "/app/"));
  app.use('/assets',            express.static(appPath + "/assets/"));

  // // All other routes should redirect to the index.html
  // //
  // app.all("/*", function(req, res, next) {
  //   //res.sendFile("index.html", { root: "dist/public" });
  //   res.sendfile(app.get('appPath') + '/index.html');
  // });
};