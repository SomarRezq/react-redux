const router = require('express').Router();
const {getAllReadings, getReading, addReading, deleteReading} = require('../Controllers/index')
router.route('/').get((req, res) => getAllReadings(req, res));
router.route('/:id').get((req, res) => getReading(req, res));
router.route('/').post((req, res) => addReading(req, res) );
router.route('/:id').delete((req, res) => deleteReading(req, res) );

module.exports = router;