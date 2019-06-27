bcrypt = require('bcrypt');


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id:1, username: 'leonel', password: "pass"},
        { id:2, username: "test", password: bcrypt.hashSync('pass', 10) }
      ]);
    });
};
