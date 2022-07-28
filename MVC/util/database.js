const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'nodesql',
    password: 'FEG@VIga8uv2'
})

module.exports = pool.promise();