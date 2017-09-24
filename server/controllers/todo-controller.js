const Todo = require('../models/todo')

var createTodo = (req,res) => {
  Todo.create({
    task  :req.body.task,
    dateTask: req.body.dateTask,
    status: req.body.status,
    tags: req.body.tags,
    creator: req.body.creator
  }).then(dataTodo=>{
    res.send(dataTodo)
  }).catch(err=>{
    res.send(err)
  })
}

var getAllTodo = (req,res) => {
	Todo.find({creator:req.dataUser._id})
	.then(dataTodo=>{
		res.send(dataTodo)
	}).catch(err=>{
		res.send(err)
	})
}

var getSingleTodo = (req,res) => {
  Todo.find({_id:req.params.id})
  .then(dataTodo => {
    res.send(dataTodo)
  }).catch(err => {
    res.send(err)
  })
}

var updateTodo = (req,res) =>{
  Todo.update({_id:req.dataUser._id},{
    task  :req.body.task,
    dateTask: req.body.dateTask,
    status: req.body.status,
    tags: req.body.tags,
    creator: req.body.creator
  }).then(dataTodo=>{
    res.send(dataTodo)
  }).catch(err => {
    res.send(err)
  })
}

var deleteTodo  = (req,res)=>{
  Todo.remove({_id:req.params.id})
  .then(dataTodo=>{
    res.send('user has been delete')
  }).catch(err => {
    res.send(err)
  })
}

module.exports = {
  createTodo,
  getAllTodo,
  getSingleTodo,
  updateTodo,
  deleteTodo
}
