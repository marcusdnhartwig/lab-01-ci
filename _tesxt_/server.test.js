'use strict';


const supertest = require('supertest');
const server = require('../src/server').app;
const request = supertest(server);

describe('Server Tests', ()=> {
  it(`responds with a 200 status code to get requests to '/'`, async()=> {
    const response = await request.get('/');
    expect(response.status).toEqual(200);
  });
});
