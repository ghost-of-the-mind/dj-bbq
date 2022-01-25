const { Pool } = require('pg');

require('dotenv').config();

const nodeEnv = process.env.NODE_ENV !== 'production';

// Development Postgres config

const devDatabaseConfig = {
    user: process.env.REACT_APP_post_dev_user,
    host: process.env.REACT_APP_post_dev_host,
    database: process.env.REACT_APP_post_dev_db,
    password: process.env.REACT_APP_post_dev_password,
    port: process.env.REACT_APP_post_dev_port,
}

// Production (Digital Ocean) Postgres config

const prodDatabaseConfig = { 
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
    ca: process.env.DATABASE_CERT,
};

const poolConfig = nodeEnv ? devDatabaseConfig : prodDatabaseConfig;

// pools will use environment variables
// for connection information
const pool = new Pool(poolConfig);

module.exports = pool;