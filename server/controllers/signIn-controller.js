//jangan lupa require jwt. disini maneh salah di bagian if(kondisi)
const express = require('express')
const app = express()
const model = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()


var signIn = (req,res) => {
	model.find({
		username:req.body.username
	}).then(data_user=>{
		console.log('==>',data_user);
		if (bcrypt.compareSync(req.body.password, data_user[0].password)) {
			console.log('====berhasil login===');
			var buatToken = {
				_id:data_user[0]._id,
				name:data_user[0].name,
				username:data_user[0].username,
				email:data_user[0].email,
				salt:data_user[0].salt
			}
			var token = jwt.sign(buatToken, process.env.KEY_SCRT)
			res.send({pesan:'sukses', auth:token})
		} else {
			res.send('username dan password tidak sesuai')
		}
	}).catch(error=>{
		res.send(error)
	})
}


module.exports = {
	signIn
}
