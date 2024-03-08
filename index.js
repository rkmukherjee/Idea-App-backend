// Start the server

const express = require('express')

const app = express()

app.use(express.json()) //For post operation

//stiching the route here
require('./routes/idea.routes')(app) //connecting the route with server or app

app.listen(8000,()=>{
    console.log("App started on port no. ",8000);
})

