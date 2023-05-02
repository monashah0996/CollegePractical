const http = require('http');

const hostname = '127.0.0.1';

const port = 3000;

var fs = require("fs");
fs.readFile('mydataset.json', function (err,data) {
    if (err) {
        console.error(err);
        return;
    }
    result =data.toString();
});

const server = http.createServer((req, res) => {

 res.statusCode = 200;

 res.setHeader('Content-Type', 'application/json');

 res.write(result);

 res.end('The End\n');

});

server.listen(port, hostname, function() {

 console.log(`Server running at http://${hostname}:${port}/`);

});