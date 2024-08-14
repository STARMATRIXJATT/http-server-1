const express = require('express')
const bodyparser=require('body-parser')
//middlewares
const app = express()
const port = 3001

//create a todo app that lets user store todo on the server
//create a http server from scratch in C
app.use(bodyparser.json())
app.post('/', function(req, res)  {
    console.log(req.body);
    res.send('Hello World!')
})
app.listen(port);
