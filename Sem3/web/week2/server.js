//Name: Mona Shah
//Id: N01479948

const http = require('http');

const hostname = '127.0.0.1';

const port = 3000;


const server = http.createServer((req, res) => {

 res.statusCode = 200;

 res.setHeader('Content-Type', 'text/html');

 var fs = require("fs");
 fs.readFile('mydataset.json', function (err,data) {
     if (err) {
         console.error(err);
         return;
     }
     res.write("<h1> Here is the Output </h1>");
     let jsonData=JSON.parse(data);
     res.write(`<p>${jsonData[0].first_name}</p>`);
     res.end("The End!");
 });
});

server.listen(port, hostname, function() {

 console.log(`Server running at http://${hostname}:${port}/`);

});