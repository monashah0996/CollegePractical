const express = require("express");
const app = express();
const cookieParser = require('cookie-parser')
app.get('/signin', (req,res) =>{
    res.cookie('session_id','12345');
    res.json({msg:'Logged'});
});
app.listen(3000)