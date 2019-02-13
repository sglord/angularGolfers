'use strict';

const router = require('express').Router();

router.use('/golfers', require('./golfers'));
router.use('/courses', require('./courses'));

router.use((req, res, next) => {
	const err = new Error('API route not found!');
	err.status = 404;
	next(err);
});

module.exports = router;
