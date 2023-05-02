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
var kwikEMart = new Company({
    companyName: "The Kwik-E-Mart",
    address: "Springfield",
    phone: "212-842-4923",
    employeeCount: 3,
    country: "U.S.A"});
//step5    
kwikEMart.save((err) => {
    if(err) {
        console.log("There was an error saving the Kwik-E-Martcompany");
    } else {
        console.log("The Kwik-E-Mart company was saved to theite5315_companies collection");
        Company.findOne({ companyName: "The Kwik-E-Mart" }).exec().then((company) => {
            if(!company) {
            console.log("No company could be found");
        } else {
            console.log(company);
        }// exit the program after saving and finding
        process.exit();
    }).catch((err) => {
        console.log(`There was an error: ${err}`);
    });
}});