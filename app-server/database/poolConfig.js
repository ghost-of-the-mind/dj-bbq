const { Pool } = require('pg')

require('dotenv').config();

const nodeEnv = process.env.NODE_ENV !== 'production';

const devUser = process.env.REACT_APP_post_dev_user;
const devHost = process.env.REACT_APP_post_dev_host;
const devDb = process.env.REACT_APP_post_dev_db;
const devPassword = process.env.REACT_APP_post_dev_password;
const devPort = process.env.REACT_APP_post_dev_port;

const devDatabaseConfig = {
    user: devUser,
    host: devHost,
    database: devDb,
    password: devPassword,
    port: devPort,
}

// Production postgres addon database

const prodDatabaseURL = process.env.DATABASE_URL;

const prodDatabaseConfig = {
  connectionString: prodDatabaseURL,
}

const prodUser = process.env.REACT_APP_post_prod_user;
const prodHost = process.env.REACT_APP_post_prod_host;
const prodDb = process.env.REACT_APP_post_prod_db;
const prodPassword = process.env.REACT_APP_post_prod_password;
const prodPort = process.env.REACT_APP_post_prod_port;

/*
const prodDatabaseConfig = {
  user: prodUser,
  host: prodHost,
  database: prodDb,
  password: prodPassword,
  port: prodPort,
  sslmode: 'require',
}
*/

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