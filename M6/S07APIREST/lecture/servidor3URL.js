const http = require('http');
http.createServer(function(req, res) {
    console.log(req.url);
    console.log(req.headers.host);
    const url = new URL(req.url, `http://${req.headers.host}`);
    console.log(url);
}).listen(3000, function () {
    console.log('Server running at http://localhost:3000/');
    });