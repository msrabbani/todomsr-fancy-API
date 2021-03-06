const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// parse application/json
app.use(bodyParser.json())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

const cors =  require('cors')
const signup = require('./routers/signup')
const signin = require('./routers/signin')
const user = require('./routers/user')
const todo = require('./routers/todo')

var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/todo-api');
mongoose.connect('mongodb://msr:tgW4JaucShOYLAxb@cluster0-shard-00-00-g7yx7.mongodb.net:27017,cluster0-shard-00-01-g7yx7.mongodb.net:27017,cluster0-shard-00-02-g7yx7.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin');

app.use(cors())
app.use('/signup', signup)
app.use('/signin', signin)
app.use('/users', user)
app.use('/todo', todo)

app.listen(process.env.PORT || 3003,()=>{
	console.log('express, port 3003');
})
