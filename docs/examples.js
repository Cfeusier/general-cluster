var clusterFuck = require('cluster-fuck'),
    express = require('express'),
    app = express();

app.get('/*', function(req, res) {
  res.send('Hello World');
});

var cfApp = clusterFuck(app);

