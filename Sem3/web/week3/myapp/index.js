const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.sendFile(__dirname +'/public/index.html') 
})

app.put('/', (req, res) => {
    res.send('Calling Put')
})

app.post('/', (req, res) => {
    res.send('Calling Post')
})

  app.delete('/', (req, res) => {
    res.send('Calling Delete')
})

app.get("*", (req, res) => {
    res.send("Page Not Found!!")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})