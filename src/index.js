const http = require('http');

http.createServer((req, res) => {
    res.end(`Hello, my friend. this is ${process.env.NODE_ENV} environment. current route: ${req.url}`);
}).listen(8080);

console.log("The server is ready");