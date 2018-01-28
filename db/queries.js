// get the connection to the DB (not knex library)
const knex = require('./knex');

module.exports = {
  getAll() {
    return knex('tvshow'); // returns all entries in the table (SELECT * FROM tvshow)
  }
}