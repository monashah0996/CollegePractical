/******************************************************************************
***
* ITE5315 – Assignment 2
* I declare that this assignment is my own work in accordance with Humber Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: Mona Shah Student ID: N01479948 Date: 10/31/2022
*
*
******************************************************************************
**/
var express = require('express'); //importing express module
var path = require('path'); //importing path module to work with directories and file paths
var app = express({extended:true}); //calling the express function that returns request/response objects
var fs = require("fs"); //importing fs
const mydata =  fs.readFileSync('mydata.json');
const jsondata=JSON.parse(mydata);
const exphbs = require('express-handlebars'); //importing handlebars
const port = process.env.port || 3000; //initializing port

/** Decode Form URL Encoded data */
app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname, 'public'))); //setup the static folder that static resources can load from
app.engine('.hbs', exphbs.engine({ extname: '.hbs' })); //register .hbs files
app.set('view engine', 'hbs'); // View Engine Setup

//route for default
app.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

app.get('/data',function(req,res){
        console.log(jsondata);
        res.render('data', { title: 'JSON data is loaded and ready!' });
});

app.get('/data/search/isbn',function(req,res){
    res.render('isbn_form');
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
    res.render('title');
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

//route for allData
app.get('/allData',function(req,res){
    res.render('allData',{jsondata});
});

//route for error
app.get('*', function(req, res) {
  res.render('error', { title: 'Error', message:'Wrong Route' });
});

//when the app is listeneig to the port
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})