process.env.NODE_ENV = 'test';

const request = require('supertest');
const knex = require('../db/knex');
const app = require('../app');
const expect = require('chai').expect;
const fixtures = require('./fixtures');

describe('CRUD API', () => {
  before((done) => {
    // run migrations
    knex.migrate.latest()
      .then(() => {
        // run seeds
        return knex.seed.run();
      })
      .then(() => done());
  });
  
  // GET all entries
  it('should list all records (GET method)', (done) => {
    request(app)
      .get('/api/v1/tvshows') // GET
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        // console.log(response.body); // copy this to ./test/fixtures.js
        expect(response.body).to.be.a('array');
        expect(response.body).to.deep.equal(fixtures.tvshows);
        done();
      });
  });

});