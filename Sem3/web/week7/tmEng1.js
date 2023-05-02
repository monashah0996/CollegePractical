const express = require('express');
const app = express();
//add handlebars
const exphbs = require('express-handlebars');
const HBS = exphbs.create({
    //create custom helper
    helpers: {
        'sample': function () {
            return 100;
        },
    
    'calculation': function (num) {
            return num + 10;
        },
    'strong': function (options) {
            return '<strong>'+options.fn(this)+'</strong>';
        }
    },
});
app.engine('.hbs', HBS.engine);
//app.engine('.hbs', exphbs.engine({ extname: '.hbs' }));
//app.engine('.hbs', exphbs.create({ extname: '.hbs' }));
app.set('view engine', '.hbs')

var someData = [{
    author: true,
    name: "John",
    age: 23,
    occupation: "developer",
    company: "Scotiabank"
},
{
    author: false,
    name: "Sara",
    age: 24,
    occupation: "QA",
    company: "RBC"
},
{
    author: true,
    name: "Mona",
    age: 26,
    occupation: "Senior developer",
    company: "TD"
},
{
    author: false,
    name: "Pooja",
    age: 23,
    occupation: "Senior developer",
    company: "CIBC"
}]

//create a route for using handlebar
app.get('/viewhbs', (req, res) => {
    res.render('viewdata', {
        data: someData,
        layout: false
    })

})

app.get('/', (req, res) => {
    res.json(someData);
});

app.get('/viewData', (req, res) => {
    var htmlString = "<!doctype html>" +
        "<html>" +
        "<head>" +
        "<title>" + "View Data" + "</title>" +
        "</head>" +
        "<body>" +
        "<table border='1'>" +
        "<tr>" +
        "<th>" + "Name" + "</th>" +
        "<th>" + "Age" + "</th>" +
        "<th>" + "Occupation" + "</th>" +
        "<th>" + "Company" + "</th>" +
        "</tr>" +
        "<tr>" +
        "<td>" + someData.name + "</td>" +
        "<td>" + someData.age + "</td>" +
        "<td>" + someData.occupation + "</td>" +
        "<td>" + someData.company + "</td>" +
        "</tr>" +
        "</table>" +
        "</body>" +
        "</html>";
    res.send(htmlString);
});

app.listen(3000)