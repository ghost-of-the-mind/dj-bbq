const { Pool } = require('pg')

require('dotenv').config();

const nodeEnv = process.env.NODE_ENV !== 'production';

const user = process.env.REACT_APP_post_dev_user;
const host = process.env.REACT_APP_post_dev_host;
const db = process.env.REACT_APP_post_dev_db;
const password = process.env.REACT_APP_post_dev_password;
const port = process.env.REACT_APP_post_dev_port;

const devDatabaseConfig = {
    user: user,
    host: host,
    database: db,
    password: password,
    port: port,
}

// Production postgres addon database
const prodDatabaseConfig = {
  connectionString: process.env.DATABASE_URL,
}

const poolConfig = nodeEnv ? devDatabaseConfig : prodDatabaseConfig;


// pools will use environment variables
// for connection information
const pool = new Pool(poolConfig);

  /*
  Accessing the database
    pool.query('SELECT NOW()', (err, res) => {
        console.log(err, res)
        pool.end()
    })
  */

module.exports = pool;