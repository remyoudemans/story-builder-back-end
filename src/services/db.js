// TODO: connect to the db via pg-promise
// TODO: use environment variables
// TODO: put .env in .gitignore
// TODO: make endpoints getting and setting these
// TODO: connect the front-end!

const pgp = require('pg-promise')({
  // query: e => console.log('SQL >>>', e.query)
})

let initOptions
if (!process.env.CONN_STRING && (
  process.env.DB_HOST &&
  process.env.DB_PORT &&
  process.env.DB_DATABASE &&
  process.env.DB_USERNAME &&
  process.env.DB_PASSWORD
)) {
  initOptions = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    ssl: process.env.DB_SSL,
    client_encoding: process.env.DB_CLIENT_ENCODING,
    poolSize: process.env.DB_POOL_SIZE,
    poolIdleTimeout: process.env.DB_POOL_TIMEOUT
  }
} else if (process.env.CONN_STRING) {
  initOptions = process.env.CONN_STRING
} else {
  throw new Error('CONN_STRING env variable not set')
}

const db = pgp(initOptions)
if (!db) throw new Error('Failed to initialize database connection')

const sql = path => new pgp.QueryFile(path, {
  debug: process.env.NODE_ENV !== 'production',
  minify: true
})

module.exports = { pgp, db, sql }
