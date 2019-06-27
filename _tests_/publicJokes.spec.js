const request = require('supertest');
const db = require('../database/dbConfig');

const server = require('../api/server.js');
const { add } = require('../publicJokes/publicJokesModel.js');



describe('publicJokes', () => {

    beforeEach( async () => {
        await db('publicJokes').truncate();
    })

    describe('GET to /', () => {
        it('should return status code 200', () => {
            return request(server)
            .get('/api/publicJokes')
            .expect(200)
        })
    })

    describe('POST', () => {
        it('should add a joke', async () => {
            await add({ joke: "testing joke" })
            const jokes = await db('publicJokes');

            expect(jokes).toHaveLength(1)
        })

        it('should add the correct joke', async () => {
            let joke = { joke: "testing joke" }
            let added = await add(joke);

            expect(added.joke).toBe(joke.joke);
        })
    })
})