'use strict';

const db = require('../database');

const Golfer = require('../models/golfer.model');
const Course = require('../models/golfer.model');

module.exports = {
	Golfer,
	Course,
	db
};

// POSTMAN TEST THE ROUTES
// LAUNCH THE APP ON ONE PORT
// link up to one single app process
// sequelize to mongooose
