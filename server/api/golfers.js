const router = require('express').Router();

// models
const Golfer = require('../db/models/golfer.model');
const Course = require('../db/models/course.model');

const golfer_controller = require('../db/controllers/golfer.controller');

//api/golfers
router.get('/test', golfer_controller.test);

//// get all
router.get('/', async (req, res, next) => {
	try {
		// mongo this shit
		const golfers = await Golfer.findAll();
		res.send(golfers);
	} catch (error) {
		next(error);
	}
});

//// add one
router.post('/', async (req, res, next) => {
	try {
		const newGolfer = await Golfer.create(req.body);
		let id = newGolfer.dataValues.id;
		res.status(200).send(newGolfer);
	} catch (error) {
		next(error);
	}
});

//// update
router.put('/:id', async (req, res, next) => {
	try {
		let updatedGolfer = await Golfer.update(req.body, {
			// returning: true,
			// plain: true,
			where: {
				id: req.params.id
			}
		});
		if (!updatedGolfer) {
			const err = Error('not found');
			err.status = 404;
			throw err;
		} else {
			res.send(updatedGolfer);
		}
	} catch (error) {
		next(error);
	}
});
//// delete
router.delete('/:id', async (req, res, next) => {
	try {
		const gofler = await Golfer.destroy({
			where: { id: req.params.id }
		});
		if (gofler < 1) {
			const err = Error('Thats not a valid gofler!');
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
