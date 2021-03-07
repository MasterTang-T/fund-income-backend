const mysql = require('mysql');
const db_config = require('./db_config');
// 连接数据库
const db = mysql.createConnection(db_config)
db.connect(err =>{
    if (err) throw err;
    console.log('数据库连接成功')
})

module.exports = db;