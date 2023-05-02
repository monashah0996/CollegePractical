/******************************************************************************
***
* ITE5315 – Assignment 4
* I declare that this assignment is my own work in accordance with Humber Academic Policy. 
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
* 
* Name: Mona Student ID: N01479948 Date: 11/21/22
*
*
******************************************************************************
**/

var express  = require('express');
var path = require('path'); //importing path module to work with directories and file paths
var mongoose = require('mongoose');
var app      = express({extended:true});
var database = require('./config/database');
var bodyParser = require('body-parser');         // pull information from HTML POST (express4)
const exphbs = require('express-handlebars'); //importing handlebars
 
var port     = process.env.PORT || 8000;
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json


mongoose.connect(database.url);

var Employee = require('./models/employee');
var Book = require('./models/book');

app.use(express.static(path.join(__dirname, 'public'))); //setup the static folder that static resources can load from
app.engine('.hbs', exphbs.engine({
    extname: '.hbs', runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true
    }
}));
app.set('view engine', 'hbs'); // View Engine Setup
 
 
//get all employee data from db
app.get('/api/employees', function(req, res) {
	// use mongoose to get all todos in the database
	Employee.find(function(err, employees) {
		// if there is an error retrieving, send the error otherwise send data
		if (err)
			res.send(err)
		res.json(employees); // return all employees in JSON format
	});
});

// get a employee with ID of 1
app.get('/api/employees/:employee_id', function(req, res) {
	let id = req.params.employee_id;
	Employee.findById(id, function(err, employee) {
		if (err)
			res.send(err)
 
		res.json(employee);
	});
 
});


// create employee and send back all employees after creation
app.post('/api/employees', function(req, res) {

    // create mongose method to create a new record into collection
    console.log(req.body);

	Employee.create({
		name : req.body.name,
		salary : req.body.salary,
		age : req.body.age
	}, function(err, employee) {
		if (err)
			res.send(err);
 
		// get and return all the employees after newly created employe record
		Employee.find(function(err, employees) {
			if (err)
				res.send(err)
			res.json(employees);
		});
	});
 
});


// create employee and send back all employees after creation
app.put('/api/employees/:employee_id', function(req, res) {
	// create mongose method to update an existing record into collection
    console.log(req.body);

	let id = req.params.employee_id;
	var data = {
		name : req.body.name,
		salary : req.body.salary,
		age : req.body.age
	}

	// save the user
	Employee.findByIdAndUpdate(id, data, function(err, employee) {
	if (err) throw err;

	res.send('Successfully! Employee updated - '+employee.name);
	});
});

// delete a employee by id
app.delete('/api/employees/:employee_id', function(req, res) {
	console.log(req.params.employee_id);
	let id = req.params.employee_id;
	Employee.remove({
		_id : id
	}, function(err) {
		if (err)
			res.send(err);
		else
			res.send('Successfully! Employee has been Deleted.');	
	});
});

//get all book data from db
app.get('/api/books', function(req, res) {
	// use mongoose to get all todos in the database
	Book.find(function(err, books) {
		// if there is an error retrieving, send the error otherwise send data
		if (err)
			res.send(err)
		//res.json(books); // return all employees in JSON format
		res.render('allData',{books});
	});
});

// get a book with ID of 1
app.get('/api/books/:book_id', function(req, res) {
	let id = req.params.book_id;
	Book.findById(id, function(err, books) {
		if (err)
			res.send(err)
 
		res.json(books);
	});
 
});

app.get('/api/insert/books',function(req,res){
    res.render('insert');
});

// create book and send back all book after creation
app.post('/api/createbooks', function(req, res) {

    // create mongose method to create a new record into collection
    console.log(req.body);

	Book.create({
		_id: req.body._id,
		title : req.body.title,
		isbn : req.body.isbn,
		pageCount : req.body.pageCount,
		publishedDate : req.body.publishedDate,
		thumbnailUrl : req.body.thumbnailUrl,
		shortDescription : req.body.shortDescription,
		longDescription : req.body.longDescription,
		status : req.body.status,
		authors : req.body.authors,
		categories : req.body.categories
	}, function(err, books) {
		if (err)
			console.log(err.message);
 
		// get and return all the books after newly created book record
		Book.find(function(err, books) {
			if (err)
				console.log(err.message)
			res.json(books);
		});
	});
 
});


app.put('/api/books/:book_id', function(req, res) {
	// create mongose method to update an existing record into collection
    console.log(req.body);

	let id = req.params.book_id;
	var data = {
		title : req.body.title,
		isbn : req.body.isbn,
		pageCount : req.body.pageCount,
		publishedDate : req.body.publishedDate,
		thumbnailUrl : req.body.thumbnailUrl,
		shortDescription : req.body.shortDescription,
		longDescription : req.body.longDescription,
		status : req.body.status,
		pageCount : req.body.pageCount,
		authors : req.body.authors,
		categories : req.body.categories
	}

	// save the book
	Book.findByIdAndUpdate(id, data, function(err, books) {
	if (err) throw err;

	res.send('Successfully! Book updated - '+books.title);
	});
});

// delete a book by id
app.delete('/api/books/:book_id', function(req, res) {
	console.log(req.params.book_id);
	let id = req.params.book_id;
	Book.remove({
		_id : id
	}, function(err) {
		if (err)
			res.send(err);
		else
			res.send('Successfully! Book has been Deleted.');	
	});
});

app.listen(port);
console.log("App listening on port : " + port);