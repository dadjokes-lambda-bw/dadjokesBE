const router = require('express').Router();
const Jokes = require('./privateJokesModel.js');
const restricted = require('../auth/restricted-middleware.js');

router.get('/', restricted, (req, res) => {
    Jokes.find()
        .then(jokes => {
            res.status(200).json(jokes)
        })
        .catch(err => {
            res.status(500).json({ error: err, message: 'Could not retrieve jokes.' })
        })
})

router.post('/', restricted, async (req, res) => {
    req.body.user_id = req.decodedToken.subject
    try {
        const newJoke = await Jokes.add(req.body)
        
        
        res.status(201).json(newJoke)
    } catch(error){
        res.status(500).json(error)
    }
})


module.exports = router;