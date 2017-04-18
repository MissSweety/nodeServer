var http = require("http");
var url = require('url');

function start(route, handle) {
  function main(req, res) {
    const pathname = url.parse(req.url).pathname;
    console.log('-----main-----');
    console.log("Request from:" + pathname + " received.");

    const responseTExt = route(handle, pathname, res);
  }

  http.createServer(main).listen(8888);
  console.log("Server has started.");
}

exports.start = start;
