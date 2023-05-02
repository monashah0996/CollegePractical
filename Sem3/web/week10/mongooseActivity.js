var mongoose = require("mongoose");
//connect to the MongoDB in my local or ATLAS
var url ="mongodb+srv://root:root@cluster0.sbaqcv5.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(url);
var Schema = mongoose.Schema;
var companySchema = new Schema({
    "companyName": String,
    "address": String,
    "phone": String,
    "employeeCount": {
        "type": Number,
        "default": 0
    },"country": String
});
var Company = mongoose.model("ite53415_companies", companySchema);

// create a new company
var kwikEMart = new Company({
    companyName: "The Kwik-E-Mart",
    address: "Springfield",
    phone: "212-842-4923",
    employeeCount: 3,
    country: "U.S.A"});
    // save the company
    kwikEMart.save((err) => 
    {if(err) {
        console.log("There was an error saving the Kwik-E-Mart company");
    } else {
        console.log("The Kwik-E-Mart company was saved to theite5315_companies collection");}
        // exit the program after saving
        process.exit();
    });