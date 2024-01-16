const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '*Mysql201310',
    port: 3306,
    database: 'compania'
});

module.exports = {pool}