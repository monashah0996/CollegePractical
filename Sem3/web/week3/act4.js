const express = require('express')
const app = express()
const port = 3000

app.get('/api/emps', (req,res)=>{
    res.send([1,2,3]);
});
     
app.get('api/emps/:id', (req,res)=>{
    res.send(req.params.id);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})