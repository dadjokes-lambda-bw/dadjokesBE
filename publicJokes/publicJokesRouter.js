const router = require('express').Router();
const Jokes = require('./publicJokesModel.js');
const db = require('../database/dbConfig.js');

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

router.delete('/:id', (req, res) => {
    const { id } = req.params;
  
    db('publicJokes')
      .where({ id })
      .del()
      .returning('id')
      .then(count => {
        if (count > 0) {
          res.status(200).json(count);
        } else {
          res.status(404).json({ errorMessage: 'A joke the specified ID does not exist.' });
        }
      })
      .catch(err => {
        res.status(500).json({ error: err, message: 'There was an error removing that joke.' });
      });
  });



module.exports = router;