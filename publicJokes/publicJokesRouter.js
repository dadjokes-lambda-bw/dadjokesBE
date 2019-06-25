const router = require('express').Router();
const Jokes = require('./publicJokesModel.js');

router.get('/', (req, res) => {
    Jokes.find()
        .then(jokes => {
            res.status(200).json(jokes)
        })
        .catch(err => {
            res.status(500).json({ error: err, message: 'Could not retrieve jokes.' })
        })
})

module.exports = router;