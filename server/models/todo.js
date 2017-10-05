const mongoose = require('mongoose')

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var todoSchema = new Schema({
  task    : String,
  status  : Boolean,
  tags    : String,
  creator : {type:Schema.Types.ObjectId, ref:"User"}
},{
  timestamps: true
});

var Todo = mongoose.model('Todo', todoSchema)
module.exports = Todo
