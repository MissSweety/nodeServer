const resw = require('./requestHandler');

function route(handle, pathname, res) {
	console.log('-----route-----');
  console.log("route a request for " + pathname);
  if (typeof handle[pathname] === 'function') {
    return handle[pathname](res);
  } else {
  	return resw.writeRes(res, '404', 'no request handler founded');
  }
}

module.exports = route;