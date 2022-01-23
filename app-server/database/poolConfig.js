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

/*
const connectionString = process.env.DATABASE_URL;
const cert = process.env.CACERT;

const prodDatabaseConfig = {  
    connectionString: connectionString,
    ssl: {
        rejectUnauthorized: true,
        ca: cert,
    },
};
*/

const prodDatabaseConfig = {  
    user: process.env.USERNAME,
    host: process.env.HOSTNAME,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.DB_PORT,
};

const poolConfig = nodeEnv ? devDatabaseConfig : prodDatabaseConfig;

// pools will use environment variables
// for connection information
const pool = new Pool(poolConfig);

module.exports = pool;