var express  = require('express');
var path = require('path'); 
var mongoose = require('mongoose');
var app      = express({extended:true});

var Schema = mongoose.Schema;
GiftSchema = new Schema({
    gift_type : String,
    gift_category: Number,
	cost : String,
    group_age: String,
});

mongoose.connect("mongodb://localhost:27017");

app.get('/data', function(req, res) {
	GiftSchema.find(function(err, gift) {
		if (err)
			res.send(err)
		res.json(gift); 
	});
});

app.get('/data/:index', function(req, res) {
	let index = req.params.index;
    const resultArray = GiftSchema.getIndexes();
    res.json(resultArray[index]);
});

app.listen(process.env.PORT || 8000)