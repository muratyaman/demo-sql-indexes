require('dotenv').config();

const { makeConfig } = require('./src/config');
const config = makeConfig(process.env);

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: config.db,
  staging: config.db,
  production: config.db,
};
