const mysql = require('mysql');
const db_config = require('./db_config');
// 连接数据库
const db = mysql.createConnection(db_config)
const DB_ERROR = 'sql连接错误';
db.connect(err =>{
    if (err) throw err;
    console.log('数据库连接成功')
})
db.DB_ERROR = DB_ERROR;
module.exports = db;