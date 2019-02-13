let mongoose = require('mongoose');
const server = '127.0.0.1:54750';
const database = 'golfcourse';
class Database {
	constructor() {
		this._connect();
	}
	_connect() {
		mongoose
			.connect(`mongodb://${server}/${database}`)
			.then(() => {
				console.log('DB connection successful');
			})
			.catch(err => {
				console.error('DB error');
			});
	}
}
module.exports = new Database();
