const User = require('../models/user')

var getAllUser = (req,res) => {
	User.find({})
	.then(dataUser=>{
		res.send(dataUser)
	}).catch(err=>{
		res.send(err)
	})
}

var getSingleUser = (req,res) => {
  User.find({_id:req.params.id})
  .then(dataUser => {
    res.send(dataUser)
  }).catch(err => {
    res.send(err)
  })
}

var updateUser = (req,res) =>{
  User.update({_id:req.params.id},{
    name: req.body.name,
    username: req.body.username,
    password: req.body.password,
    email: req.body.email
  }).then(dataUser=>{
    res.send(dataUser)
  }).catch(err => {
    res.send(err)
  })
}

var deleteUser = (req,res)=>{
	User.remove({_id:req.params.id})
	.then(dataUser => {
		res.send('user has been delete')
	}).catch(err => {
		res.send(err)
	})
}

module.exports = {
  getAllUser,
  getSingleUser,
  updateUser,
  deleteUser
}
