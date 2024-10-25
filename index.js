const express = require("express"),
morgan =require('morgan'),
app = express(),
port = 3000;


app.use(morgan('dev'));
app.use(express.static('public'))

app.get('/',(req, res)=>{
    res.sendFile(__dirname + "/public/index.html")
})

app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})