const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let GolferSchema = new Schema({
	name: { type: String, required: true, max: 100 },
	email: { type: String, required: true },
	phone: { type: String, required: true, max: 10 },
	handicap: { type: Number, required: true },
	imgUrl: { type: String, required: false }
});

module.exports = mongoose.model('Golfer', GolferSchema);
