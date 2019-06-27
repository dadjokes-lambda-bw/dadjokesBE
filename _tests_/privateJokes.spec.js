const request = require('supertest');
const db = require('../database/dbConfig');

const server = require('../api/server');

describe('privateJokes', () => {

let token;

beforeAll(async done => {
    await db('users');
        request(server)
        .post('/api/auth/login')
        .send({
            username: 'test',
            password: 'pass'
        })
        .end((err, response) => {
            token = response.body.token;
            done();
        });
    });

    it('should require authorization to get /', async () => {
        return request(server)
        .get('/api/privateJokes')
        .expect(401)
    })

    it('should return list of jokes in privateJokes table', async () => {
       return request(server)
        .get('/api/privateJokes')
        .set('authorization', `${token}`)
        .then( res => {
            expect(res.type).toBe('application/json')
        })
    })

    it('should return 201 when authorized', () => {

        let joke = { joke: "testing joke again" }

        return request(server)
        .get('/api/privateJokes')
        .set('authorization', `${token}`)
        .send(joke)
        .then( res => {
            expect(res.status).toBe(201)
        })
    })

})

