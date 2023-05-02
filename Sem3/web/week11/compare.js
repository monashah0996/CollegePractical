const bcrypt = require('bcryptjs');
require('dotenv').config()
const hash = process.env.PASS;

// Pull the password "hash" value from the DB andcompare it to "myPassword123" (match)
bcrypt.compare("myPassword123",hash).then((result) => {
        // result === true
        console.log(result)
        console.log('Success')
});
    // Pull the password "hash" value from the DB andcompare it to "myPasswordABC" (does not match)
    bcrypt.compare("myPasswordABC",hash).then((result) => {
        // result === false
        console.log(result)
        console.log('Unsuccess')
    });