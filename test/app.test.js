process.env.NODE_ENV = 'test';

const request = require('supertest');
const knex = require('../db/knex');
const app = require('../app');
const expect = require('chai').expect;

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

});