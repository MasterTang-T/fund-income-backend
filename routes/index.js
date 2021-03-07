var express = require('express');
var router = express.Router();
// 数据库相关配置和方法
const db = require('./utils/db/db')
const user_sql = require('./utils/db/sql/user')
router.get('/', function (req, res, next) {
  db.query(user_sql.selectUsers, function (err, res) {
    if (err) console.error(err);
    console.log(res, 'res');
  })
  res.end()
});
router.get('/addUser', function (req, res, next) {
  let userArr = ['test', '123']
  db.query(user_sql.addUser, userArr, function (err, res) {
    if (err) console.error(err);
    console.log(res, 'res');
  })
  res.end()
});
module.exports = router;