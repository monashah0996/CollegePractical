const http = require('http');
const url = require('url');
var express  = require('express');
var path = require('path');
var mongoose = require('mongoose');
require('dotenv').config()
var app      = express();
var database = require('./config/database');
var bodyParser = require('body-parser'); // pull information from HTML POST (express4)
 
const exphbs = require('express-handlebars');

var port = process.env.PORT || 8000;
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(express.static(path.join(__dirname, 'public')));

// Intializing template engine
app.engine('.hbs', exphbs.engine({ 
	extname: '.hbs',runtimeOptions:{
		allowProtoPropertiesByDefault:true,
		allowProtoMethodsByDefault:true
	} 
}));
app.set('view engine', 'hbs');

var Movies = require('./models/movie');
var allModules = require('./allmodules');
	
async function dbconnect() {
	var conResult = await allModules.intialize(process.env.DATABASEURL);
	if(conResult == true)
	{
		app.listen(port);
		console.log("App listening on port : " + port);
	}
	else{
		console.log(conResult);
	}
}
dbconnect();

// Create a new Record
app.post('/api/moviescreate', async function(req, res) {

    // create mongose method to create a new record into collection
	var data = {
		plot : req.body.plot,
		genres : req.body.genres,
		cast : req.body.cast,
		languages: req.body.languages,
		countries : req.body.countries,
		writers: req.body.writers,
		directors : req.body.directors,
		awards : {
			wins: req.body.wins,
			nominations: req.body.nominations,
			text: req.body.text
		},
		imdb:{
			rating: req.body.imdbrating // comments
		},
		type: req.body.type,
		tomatoes:{
			viewer:{
				rating: req.body.viewerrating, // comments
				numReviews: req.body.viewernumReviews, // comments
				meter: req.body.viewermeter // comments
			},
			critic:{
				rating: req.body.criticrating // comments
			},
			boxOffice: req.body.boxOffice,
		}
	};
	// console.log(allModules.addNewMovieData(data));
	var result = await allModules.addNewMovieData(data);
	console.log("checking");
	await res.send(result);
});

// find a record using ID
app.get('/api/movies/:movie_id', async function(req, res) {
	let id = req.params.movie_id;
	var result = await allModules.getMovieById(id);
	await res.send(result);
});

app.put('/api/movies/:movie_id', async function(req, res) {
	// create mongose method to update an existing record into collection

	let id = req.params.movie_id;
	var data = {
		plot : req.body.plot,
		genres : req.body.genres,
		cast : req.body.cast,
		languages: req.body.languages,
		countries : req.body.countries,
		writers: req.body.writers,
		directors : req.body.directors,
		awards : {
			wins: req.body.wins,
			nominations: req.body.nominations,
			text: req.body.text
		},
		imdb:{
			rating: req.body.imdbrating // comments
		},
		type: req.body.type,
		tomatoes:{
			viewer:{
				rating: req.body.viewerrating, // comments
				numReviews: req.body.viewernumReviews, // comments
				meter: req.body.viewermeter // comments
			},
			critic:{
				rating: req.body.criticrating // comments
			},
			boxOffice: req.body.boxOffice,
		}
	};

	// console.log(allModules.addNewMovieData(data));
	var result = await allModules.updateMovieByID(data, id);
	console.log(result);
	if(result == true)
		res.send("Successfully Updated1");
	else
		console.log("result is empty");
});

 app.delete('/api/movies/:movie_id', async function(req, res) {
	let id = req.params.movie_id;
	var result = await allModules.deleteMovieById(id);
	if (result){
		await res.send("Movie Deleted");
	}
	else{
		console.log("not deleted");
	}
});

// Handling GET /send Request
app.get("/api/getallmovies", async (req, res, next) => {

	const queryObject = url.parse(req.url, true).query;
	//let params = new URLSearchParams(window.location.search);
	let { page, size, title } = queryObject; // req.query
	// If the page is not applied in query.
	if (!page) {

		// Make the Default value one.
		page = 1;
	}
	if (!size) {
		size = 1;
	}
	const limit = parseInt(size);
	
	var result =  await allModules.getAllMovies(page,limit,title);
	await res.send({
		page,
		size,
		Info: result
	});
});

app.get("/api/movieform",(req,res)=>{    
    res.render('moviedata'); 
});

app.post("/api/movieform",async (req,res) => { 

	page = req.body.pageno;
	limit = req.body.pagesize;
	title = req.body.title;
	var result = await allModules.formMovie(page,limit,title);
	await res.render('movieresult', {data: result});
  }
)