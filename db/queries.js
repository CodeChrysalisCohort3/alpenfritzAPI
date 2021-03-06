// get the connection to the DB (not knex library)
const knex = require('./knex');

module.exports = {
  getAll() {
    return knex('tvshow'); // returns all entries in the table (SELECT * FROM tvshow)
  },
  getOne(id) {
    return knex('tvshow').where('id', id).first(); // return one entry
  },
  create(tvshow) {
    return knex('tvshow').insert(tvshow, '*'); // insert query, '*' returns the entry
  },
  update(id, tvshow) {
    return knex('tvshow').where('id', id).update(tvshow, '*'); // update an entry,  '*' returns the entry
  },
  delete(id) {
    return knex('tvshow').where('id', id).del(); // delete an entry
  }
}