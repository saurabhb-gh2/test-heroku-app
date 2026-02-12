const http = require('http');
http.createServer((req, res) => res.end('Hellozz')).listen(process.env.PORT || 5000);
