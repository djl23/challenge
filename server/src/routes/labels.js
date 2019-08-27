const router = require('express').Router();

router.get('/', function(req, res) {
  const labels = [
    {
      upperText: 'what if the blue i see',
      lowerText: 'isnt the same color you see'
    },
    {
      upperText: 'what if all the specs we see in the light',
      lowerText: 'are all miniature universe'
    },
    {
      upperText: 'what if the cia invented dinosaurs',
      lowerText: 'to discourage time travel'
    }
  ];
  res.json(labels);
});

module.exports = router;
