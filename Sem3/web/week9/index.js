var MongoClient =
require('mongodb').MongoClient;

// Connection URL
var url ='mongodb://localhost:27017/my_database'

try {db = MongoClient.connect(url)
    console.log('Connected successfully!')} 
catch (err) {
    // Handle error
    console.log('Connection failed!')
}