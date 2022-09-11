const router = require('express').Router();
const {getAllReadings} = require('../Controllers/index')
router.route('/').get((req, res) => getAllReadings(req, res));

module.exports = router;