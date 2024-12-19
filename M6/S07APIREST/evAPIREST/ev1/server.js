const http = require('http');
const handleRequest = require('./router');

const server = http.createServer((req, res) => {
    handleRequest(req, res);
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
