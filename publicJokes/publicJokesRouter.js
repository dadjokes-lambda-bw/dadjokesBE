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

router.post('/', async (req, res) => {
    try {
        const newJoke = await Jokes.add(req.body)
        res.status(201).json(newJoke)
    } catch(error){
        res.status(500).json(error)
    }
})



module.exports = router;