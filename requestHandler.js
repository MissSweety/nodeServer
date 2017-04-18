var exec = require('child_process').exec;

const writeRes = (response, status, info) => {
  response.writeHead(status, { 'Content-Type': 'text/plain'});
  response.write(info);
  response.end();
}
const start = (res) => {
  console.log('request handler start was called');
  var child = exec('ls -l ../bbia/node_modules');
  res.writeHead(200, { 'Content-Type': 'text/plain'});

  child.stdout.on('data', function(data) {
    res.write(data);
  });
  child.stderr.on('data', function(data) {
    res.write(data);
  });
  child.on('close', function(code) {
    console.log('closing code: ' + code);
    res.end();
  });
}

const upload = (res) => {
  console.log('request handler upload was called');
  writeRes(res, 200, 'upload exection');//return 'UPLOAD';
}

const root = (res) => {
  console.log('request handler root was called');
  writeRes(res, 200, 'ROOT');
}

exports.start = start;
exports.upload = upload;
exports.root = root;
exports.writeRes = writeRes;
