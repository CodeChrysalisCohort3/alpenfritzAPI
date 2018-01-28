const express = require('express');
const router = express.Router();

// GET all records
router.get('/', (req, res) => {
  res.json({
    message: 'blablabla'
  });
});

module.exports = router;