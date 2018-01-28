const express = require('express');
const router = express.Router();

// queries to DB using knex
const queries = require('../db/queries');

// GET all records
router.get('/', (req, res) => {
  queries.getAll().then(tvshows => { // tvshows is the result from the DB query
    res.json(tvshows); // send it back as JSON
  });
});

module.exports = router;