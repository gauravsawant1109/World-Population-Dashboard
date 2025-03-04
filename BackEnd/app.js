const express = require('express');
const app = express();
const cors = require('cors');
// const mysql = require('mysql')
const Router = require('./Router/Router')
require('dotenv').config()


// Middleware Connections
app.use(cors())
app.use(express.json())


// Routes
app.use('/',Router)




// Connection
const PORT = process.env.PORT || 7000
app.listen(PORT, ()=>{
    console.log('App running in port: '+PORT)
})