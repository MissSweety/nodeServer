var server = require('./server');
var route = require('./router');
var han = require('./requestHandler');

var handle = { '/': han.root, '/start': han.start, '/upload': han.upload };

server.start(route, handle);