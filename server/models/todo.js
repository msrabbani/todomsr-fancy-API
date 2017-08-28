var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var Todo = new Schema({
    activity    : String,
    description: String,
		userId : {

		}
});

module.exports = Todo
