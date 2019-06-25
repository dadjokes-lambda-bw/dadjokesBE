
exports.up = function(knex, Promise) {
  return knex.schema.createTable('publicJokes', tbl => {
      tbl.increments();

      tbl
      .text('joke', 1000)
      .notNullable()
      .unique();

  })
  .createTable('privateJokes', tbl => {
      tbl.increments();

      tbl
      .text('joke', 1000)
      .notNullable()
      .unique()

      tbl
      .integer('user_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('SET NULL')
      .onUpdate('CASCADE');

  })

};

exports.down = function(knex, Promise) {
  return knex.schema
  .dropTableIfExists('privateJokes')
  .dropTableIfExists('publicJokes')
};
