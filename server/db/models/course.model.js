const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let CourseSchema = new Schema({
	name: { type: String, required: true, max: 100 },
	street: { type: String, required: true, max: 100 },
	city: { type: String, required: true, max: 100 },
	state: { type: String, required: true, max: 100 },
	zip: { type: Number, required: true, max: 5 },
	description: { type: String, required: true, max: 100 },
	par: { type: Number, required: true },
	imgUrl: { type: String, required: false }
});

module.exports = mongoose.model('Course', CourseSchema);
