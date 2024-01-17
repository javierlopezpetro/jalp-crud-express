const mysql = require('mysql2/promise');
const {DB_HOST, DB_USER, DB_PASSWORD, DB_PORT, DB_DATABASE} = require('./config');

const pool = mysql.createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_DATABASE
});

module.exports = {pool}