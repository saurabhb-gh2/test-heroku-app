const http = require('http');
http.createServer((req, res) => res.end('Helloz')).listen(process.env.PORT || 5000);
