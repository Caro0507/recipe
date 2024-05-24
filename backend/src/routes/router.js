const router = require('express').Router();



router.use(require('./user'));
router.use(require('./recipe'))
module.exports = router;