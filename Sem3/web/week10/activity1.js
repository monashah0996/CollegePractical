var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017";



MongoClient.connect(url, function (err, db) {

   if (err) throw err; 

   var dbo = db.db("Company");

   dbo.collection("customers").findOne({}, function (err, result) {

     if (err) throw err; 

     console.log(result.first_name);

     db.close();

  });

});

