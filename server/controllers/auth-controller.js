const model = require('../models/User')
const jwt = require('jsonwebtoken')
require('dotenv').config()

var userAuth = (req, res, next => {
	var token = req.body.token
	console.log(token)
	jwt.verify(token,)
})
