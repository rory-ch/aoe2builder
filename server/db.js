const { Client } = require('pg');
require('dotenv').config();

const { PGHOST, PGUSER, PGDATABASE, PGPASSWORD } = process.env;

module.exports.db = new Client({
  host: PGHOST,
  user: PGUSER,
  password: PGPASSWORD,
  database: PGDATABASE,
});
