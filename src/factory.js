const { makeConfig } = require('./config');
const { makeDb } = require('./db');
const { makeWriters } = require('./writers');
const { makeHttpServer } = require('./http');

function factory(penv = process.env) {
  const config     = makeConfig(penv);
  const db         = makeDb(config);
  const writers    = makeWriters(db);
  const httpServer = makeHttpServer(writers);

  return {
    config,
    db,
    httpServer,
  };
}

module.exports = { factory };
