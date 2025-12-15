const http = require('http');
http.createServer((req, res) => res.end('Hello')).listen(process.env.PORT || 5000);
