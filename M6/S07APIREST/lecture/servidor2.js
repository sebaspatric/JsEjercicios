const http = require('http');
http.createServer(function(req, res) {
    
    let data
    req.on('data', (body) => {
        console.log(JSON.parse(body));
    }  );
    req.on('end', () => {
        console.log(data);
    });
}).listen(3000, function () {
    console.log('Server running at http://localhost:3000/');
    });