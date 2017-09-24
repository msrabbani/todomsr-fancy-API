const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// parse application/json
app.use(bodyParser.json())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

const signup = require('./routers/signup')
const signin = require('./routers/signin')
const user = require('./routers/user')
const todo = require('./routers/todo')

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todo-api');

app.use('/signup', signup)
app.use('/signin', signin)
app.use('/users', user)
app.use('/todo', todo)


app.listen(3003,()=>{
	console.log('express, port 3003');
})
