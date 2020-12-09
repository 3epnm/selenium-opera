var static = require('node-static');
var http = require('http');
var path = require('path');

var folder = path.join(__dirname, 'app')

var file = new(static.Server)(folder);

http.createServer(function (req, res) {
  file.serve(req, res);
}).listen(8080);