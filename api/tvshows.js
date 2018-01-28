const express = require('express');
const router = express.Router();

// queries to DB using knex
const queries = require('../db/queries');

function isValidId(req, res, next) {
  if (!isNaN(req.params.id)) return next();
  next(new Error('Invalid Id'));
}

function validEntry(tvshow) {
  const hasTitle = typeof tvshow.title == 'string' && tvshow.title.trim() != '';
  const hasUrl = typeof tvshow.url == 'string' && tvshow.url.trim() != '';
  const hasDescription = typeof tvshow.description == 'string' && tvshow.description.trim() != '';
  const hasRating = !isNaN(tvshow.rating);
  return hasTitle && hasUrl && hasDescription && hasRating;
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

// POST a record
router.post('/', (req, res, next) => {
  if (validEntry(req.body)) {
    // insert into DB
    queries.create(req.body).then(tvshows => { // tvshows is an array
      res.json(tvshows[0]);
    });
  } else {
    next(new Error('Invalid entry'));
  }
});

// PUT a record (Update a record)
router.put('/:id', isValidId, (req, res, next) => {
  if (validEntry(req.body)) {
    // update the entry
    queries.update(req.params.id, req.body).then(tvshows => { // tvshows is an array
      res.json(tvshows[0]);
    });
  } else {
    next(new Error('Invalid entry'));
  }
});

module.exports = router;