const mongoose = require('mongoose')

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var userSchema = new Schema({
    name    : {
			type: String,
			required:[true,'Nama tidak boleh kosong']
		},
    username: {
			type: String,
			required:[true,'Username tidak boleh kosong']
		},
    password: {
			type: String,
			required:[true,'Password tidak boleh kosong']
		},
		email		: {
			type: String,
			required:[true,'Email tidak boleh kosong']
		},
    salt    : {
			type: String,
		}
});

const User = mongoose.model('User', userSchema)
module.exports = User
