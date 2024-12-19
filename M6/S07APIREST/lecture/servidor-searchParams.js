const http = require('http');
http.createServer(function(req, res) {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const params = url.searchParams;//(url.SearchParams);
    console.log(params.get('valor1'));
    console.log(params.get('valor2'));

    res.end('check the console for output');
    
}).listen(3000, function () {
    console.log('Server running at http://localhost:3000/');
    });