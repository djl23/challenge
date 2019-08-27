const router = require('express').Router();

router.use('/images', require('./images'));
router.use('/labels', require('./labels'));
router.use('/ssr', require('./ssr'));

module.exports = router;
