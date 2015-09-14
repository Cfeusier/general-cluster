'use strict';

var express = require('express'),
    cluster = require('cluster'),
    cpus = require('os').cpus().length;

function _isExpressApp(maybe) {
  return !!maybe && !!maybe.set && !!maybe.use;
}

function _charge(theGeneral, listenArgs) {
  if (cluster.isMaster) {
    for (var i = 0; i < cpus; i++) {
      cluster.fork();
    }
  } else {
    if (typeof listenArgs[0] !== 'number') {
      listenArgs.unshift(3000);
    }
    theGeneral.listen.apply(theGeneral, listenArgs);
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
  var listenArgs = Array.prototype.slice.call(arguments, 1);
  return _charge(theGeneral, listenArgs);
}

module.exports = GeneralCluster;
