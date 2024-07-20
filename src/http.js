const HyperExpress = require('hyper-express');

function makeHttpServer(writers) {
  const server = new HyperExpress.Server();

  server.get('/', (_request, response) => {
    response.json({ data: 'Hello World', ts: new Date() });
  });

  server.post('/with_indexes', writers.writeToTableWithIndexes);
  server.post('/without_indexes', writers.writeToTableWithoutIndexes);

  return server;
}

module.exports = { makeHttpServer };
