import "reflect-metadata";
import request from 'supertest';
import { expect } from 'chai'
import { app } from '../../app'

const testApp = request(app);

describe('Vehicle Tests', () => {
  it('should be return a vehicle list', (done) => {
    testApp
    .get('/vehicle')
    .expect(200)
    .end((err, res) => {
      if (err) return done(err);

      expect(typeof res.body.message).to.equal('array')
      done()
    })
  })
})