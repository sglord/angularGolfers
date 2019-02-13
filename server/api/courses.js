const router = require('express').Router();

// models
const Course = require('../db/models/course.model');
const Golfer = require('../db/models/golfer.model');

const course_controller = require('../db/controllers/course.controller');

//api/courses
router.get('/test', course_controller.test);

//// get all
router.get('/', async (req, res, next) => {
	try {
		const courses = await Course.findAll();
		res.send(courses);
	} catch (error) {
		next(error);
	}
});

//// update
router.put('/:id', async (req, res, next) => {
	try {
		let updatedCourse = await Course.update(req.body, {
			where: {
				id: req.params.id
			}
		});
		if (!updatedCourse) {
			const err = Error('not found');
			err.status = 404;
			throw err;
		} else {
			res.send(updatedCourse);
		}
	} catch (error) {
		next(error);
	}
});
//// delete
router.delete('/:id', async (req, res, next) => {
	try {
		const Course = await Course.destroy({
			where: { id: req.params.id }
		});
		if (Course < 1) {
			const err = Error('Thats not a valid Course!');
			err.status = 404;
			throw err;
		} else {
			res.status(204).send(req.params.id);
		}
	} catch (err) {
		next(err);
	}
});
module.exports = router;
