const request = require('supertest');
const db = require('../database/dbConfig');

const server = require('../api/server');

describe('privateJokes', () => {
    const request = require('supertest');
const db = require('../data/dbConfig');

const server = require('../api/server');

let token;

beforeAll(async done => {
    await db('users');
        request(server)
        .post('/api/auth/login')
        .send({
            username: 'user',
            password: 'password'
        })
        .end((err, response) => {
            token = response.body.token;
            done();
        });
    });

    it('should require authorization to get /', async () => {
        
    })
})

