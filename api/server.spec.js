const request = require('supertest');

const server = require('./server');

describe('server', () => {
    describe('get', () => {
        it('should return status code 200', () => {
             return request(server).get('/').expect(200);
        })
    })
})