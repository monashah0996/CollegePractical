const express = require("express");
const app = express();
const cookieParser = require('cookie-parser')

function validateCookie(req,res,next){
    const {cookies } = req;
    console.log(cookies)
    next()
;}

app.get('/signin', validateCookie, (req,res)=>{
    res.cookie('session_id','12345');
    res.json({msg:'Logged'});
});
app.listen(3000)