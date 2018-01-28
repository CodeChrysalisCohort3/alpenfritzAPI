const tvshows = require('../tvshows');

exports.seed = function (knex, Promise) {
  // Delete ALL existing entries
  return knex('tvshow').del()
    .then(function () {
      // Insert seed entries
      return knex('tvshow').insert(tvshows);
    });
};
