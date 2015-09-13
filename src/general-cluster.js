'use strict';

var express = require('express'),
    cluster = require('cluster'),
    cpus = require('os').cpus().length;

function _isExpressApp(maybe) {
  return !!maybe && !!maybe.set && !!maybe.use;
}

function _charge(theGeneral) {
  if (cluster.isMaster) {
    for (var i = 0; i < cpus; i++) {
      cluster.fork();
    }
  } else {
    theGeneral.listen(theGeneral.port || 3000);
  }
  return theGeneral;
}

function GeneralCluster(app) {
  var theGeneral;
  if (!app) {
    theGeneral = express();
    theGeneral.get('/*', function(req, res) {
      res.send('Hello World');
    });
  } else {
    theGeneral = !_isExpressApp(app) ? express(app) : app;
  }
  return _charge(theGeneral);
}

module.exports = GeneralCluster;
