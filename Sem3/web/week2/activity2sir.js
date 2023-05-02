const http = require('http');

const hostname = '127.0.0.1';

const port = 3000;


const server = http.createServer((req, res) => {

 res.statusCode = 200;

 res.setHeader('Content-Type', 'application/json');

 var fs = require("fs");
 fs.readFile('mydataset.json', function (err,data) {
     if (err) {
         console.error(err);
         return;
     }
     res.end(data);
 });
});

server.listen(port, hostname, function() {

 console.log(`Server running at http://${hostname}:${port}/`);

});