const knex = require('knex');

function makeDb(config) {
  return knex({
    client: config.db.client,
    connection: config.db.connection,
    pool: config.db.pool,
  });
}

module.exports = { makeDb };
