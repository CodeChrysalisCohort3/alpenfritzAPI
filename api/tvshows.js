const express = require('express');
const router = express.Router();

// queries to DB using knex
const queries = require('../db/queries');

function isValidId(req, res, next) {
  if (!isNaN(req.params.id)) return next();
  next(new Error('Invalid Id'));
}

// GET all records
router.get('/', (req, res) => {
  queries.getAll().then(tvshows => { // tvshows is the result from the DB query
    res.json(tvshows); // send it back as JSON
  });
});

// GET one record
router.get('/:id', isValidId, (req, res, next) => {
  queries.getOne(req.params.id).then(tvshow => {
    if (tvshow) {
      res.json(tvshow);
    } else {
      next(); // calls automatically the 404 error message in ../app.js
      // res.status(404);
      // next(new Error('Not found'));
    }
  });
});

module.exports = router;