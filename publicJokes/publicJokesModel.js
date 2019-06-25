const db = require('../database/dbConfig.js')

module.exports = {
    add,
    find,
    findBy,
    findById,
};

function find() {
    return db('privateJokes').select('joke');
  }
  
  function findBy(filter) {
    return db('publicJokes').where(filter);
  }
  
  async function add(joke) {
    const [id] = await db('publicJokes').insert(joke);
  
    return findById(id);
  }
  
  function findById(id) {
    return db('publicJokes')
      .where({ id })
      .first();
  }