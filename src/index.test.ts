import {GetData} from './types/Types'
const mongoose = require('mongoose')
const {app, server} = require('./index');
const supertest = require('supertest')



afterEach(() => {
  mongoose.connection.close();
  server.close();
});
test('test index.ts statusCode', async () => {
   const {statusCode} = await supertest(app).get('/');
   expect(statusCode).toBe(200)
});
test('test index.ts body', async () => {
   const {body} = await supertest(app).get('/');
   expect(body).toEqual({name: 'NAME'})
});

// // --runInBand --watchAll --no-cache --detectOpenHandles 