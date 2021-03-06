// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/alpenfritzAPI'
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/alpenfritzAPI_test'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
