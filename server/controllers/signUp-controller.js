const express = require('express')
const app = express()
const model = require('../models/user')
const bcrypt = require('bcryptjs')
const bodyParser = require('body-parser')

// parse application/json
app.use(bodyParser.json())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))


var signUp = (req,res) => {
	// console.log('>>>>>>>>>>>>>>', req.body);
	var salt = bcrypt.genSaltSync(10);
	var hash = bcrypt.hashSync(req.body.password, salt);

	model.create({
		name:req.body.name,
		username:req.body.username,
		password:hash,
		email:req.body.email,
		salt:salt
	})
	.then((data)=>{
		res.send('data sudah masuk')
	}).catch(err=>{
		res.send(err)
	})

}


module.exports = {
	signUp
}
