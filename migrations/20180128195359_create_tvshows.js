
exports.up = function (knex, Promise) {
  return knex.schema.createTable('tvshow', (table) => {
    table.increments();
    table.text('title');
    table.text('description');
    table.float('rating');
    table.text('url');
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('tvshow');
};
