var express = require('express');
const app = express({extended:true})
var fs = require("fs");
const mydata =  fs.readFileSync('mydata.json');
const jsondata=JSON.parse(mydata);

/** Decode Form URL Encoded data */
app.use(express.urlencoded({extended:true}));

app.get('/',function(req,res){
    res.send('Name: Mona <br/> StudentID: N01479948');
});

app.get('/data',function(req,res){
        console.log(jsondata);
        res.send("<h1> JSON data is loaded and ready! </h1>");
});

app.get('/data/isbn/:id',function(req,res){
        let found = jsondata.find(
            e => e._id == req.params.id
          );
        res.send(found.isbn)
});

app.get('/data/search/isbn',function(req,res){
    res.send(`<form method="POST" action="/isbn">
    <input type='text' id='isbn' name ='isbn' value='Enter ISBN'> <input type='submit' id='search' value='Search'>
    </form>`);
});

/** Process POST request for isbn */
app.post('/isbn', function (req, res) {
    let found = jsondata.find(
        e => e.isbn == req.body.isbn
      );
    if(found == undefined){
        found = "Please enter correct isbn";
    }
    res.send(JSON.stringify(found));
});

app.get('/data/search/title',function(req,res){
    res.send(`<form method="POST" action="/title">
    <input type='text' id='title' name ='title' value='Enter Title'> <input type='submit' id='search' value='Search'>
    </form>`);
});

/** Process POST request for title */
app.post('/title', function (req, res) {
    let found = jsondata.filter(
        e => e.title.includes(req.body.title)
      );
    if(found == undefined){
        found = "Please enter correct title";
    }
    res.send(found);

});

app.use((req, res, next) => {
    res.status(404).send({
    status: 404,
    error: 'Not found'
    })
   })

   app.get('/wrongRoute',function(req,res){
    res.send(res.status, res.error);
});

app.listen(5500,function(){
    console.log('Example app listning on port 5500!')
});