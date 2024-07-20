require('dotenv').config();
const { factory } = require('./factory');

main();

async function main() {
  const f = factory(process.env);

  f.httpServer.listen(f.config.http.port)
    .then((socket) => console.log('server started on port', f.config.http.port))
    .catch((error) => console.log('Failed to start server on port', f.config.http.port, error));
}
