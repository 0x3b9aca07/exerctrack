const express = require('express')
const cors = require('cors')
const mongooose  = require('mongoose')
const { default: mongoose } = require('mongoose')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000;
const uri = process.env.ATLAS
mongoose.connect(uri)
const connection = mongoose.connection
connection.once('open', ()=>{
    console.log("MongoDB Connected")
})

app.use(cors())
app.use(express.json)

const exercisesRouter = require('./routes/exercises')
const usersRouter = require('./routes/users')

app.use('./exercises', exercisesRouter);
app.use('./users',usersRouter);

app.listen(port,()=>{
    console.log("Server is running om port: "+port )
})