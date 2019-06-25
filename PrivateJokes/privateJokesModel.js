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
    return db('privateJokes').where(filter);
  }
  
  async function add(joke) {
    const [id] = await db('privateJokes').insert(joke);
  
    return findById(id);
  }
  
  function findById(id) {
    return db('privateJokes')
      .where({ id })
      .first();
  }