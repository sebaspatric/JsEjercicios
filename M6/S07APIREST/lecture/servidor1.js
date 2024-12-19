const http = require('http');
http.createServer(function(req, res) {
    console.log('Received request for'+ req.url);
    console.log(req.method);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello, World!\n');
    req.on('data', (body) => {
        console.log(JSON.parse(body));
    }  );
}).listen(3000, function () {
    console.log('Server running at http://localhost:3000/');
    });