const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/usersRouter.js');

const publicJokesRouter = require('../publicJokes/publicJokesRouter.js');


const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter)
server.use('/api/publicJokes', publicJokesRouter);


server.get('/', (req, res) => {
    res.send("It's working!")
})

module.exports = server;
