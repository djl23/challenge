const router = require('express').Router();

router.get('/', function(req, res) {
  res.json('https://imgflip.com/s/meme/Conspiracy-Keanu.jpg');
});

module.exports = router;
