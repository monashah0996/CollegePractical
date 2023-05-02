//Name: Mona Shah ID:N01479948
var fs = require("fs");
fs.readFile('mydataset.json', function (err,data) {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data.toString());
});
console.log("Program Ended");