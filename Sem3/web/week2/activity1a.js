const fs = require('fs');
let myData = fs.readFileSync('mydataset.json');
let contacts = JSON.parse(myData);
console.log(contacts);