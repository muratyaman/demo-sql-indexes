function makeConfig(penv = process.env) {
  return {
    http: {
      port: penv.HTTP_PORT || 8000,
    },
    db: {
      client    : penv.DB_KIND || 'mysql2',
      connection: {
        host    : penv.DB_HOST || 'localhost',
        port    : penv.DB_PORT || 3306,
        database: penv.DB_NAME || 'index_demo',
        user    : penv.DB_USER || '',
        password: penv.DB_PASS || '',
      },
      searchPath: ['public'],
      pool: {
        min: 5,
        max: 100,
      },
      migrations: {
        tableName: 'knex_migrations',
      },
    },
  };
}

module.exports = { makeConfig };
