const Todo = require('../models/todo')

var createTodo = (req,res) => {
  Todo.create({
    task  :req.body.task,
    status: req.body.status,
    tags: req.body.tags,
    creator: req.dataUser._id
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

var updateTodo = (req,res) => {
  Todo.findById({_id:req.params.id})
  .then(dataTodo=>{
    // console.log("ini data Todo ==> ",dataTodo);
    if (dataTodo.creator == req.dataUser._id) {
      Todo.update({
        _id:dataTodo.id
      }, {
        $set:{
          task  :req.body.task || dataTodo.task,
          dateTask: req.body.dateTask || dataTodo.dataTask,
          status: req.body.status || dataTodo.status,
          tags: req.body.tags || dataTodo.tags
        }
      }).then(todoUpdate=>{
        console.log('berhasil di update');
        res.send(todoUpdate)
      }).catch(err=>{
        res.send(err)
      })
    } else {
      res.send('anda tidak punya wewenang untuk mengedit data ini!!')
    }
  }).catch(err=>{
    res.send(err)
  })
}

var deleteTodo  = (req,res)=>{
  Todo.findById({_id:req.params.id}).then(dataTodo=>{
    if (dataTodo.creator == req.dataUser._id) {
      Todo.remove({_id:dataTodo.id}).then(x=>{
        res.send('Todo has been remove')
      }) .catch(err=>{
        res.send(err)
      })
    }else {
      res.send('anda tidak punya wewenang untuk menghapus sata ini!!')
    }
  })
}

module.exports = {
  createTodo,
  getAllTodo,
  updateTodo,
  deleteTodo
}
