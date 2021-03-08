var express = require('express');
var router = express.Router();
// 数据库相关配置和方法
const db = require('./utils/db/db')
const user_sql = require('./utils/db/sql/user')
router.get('/', function (req, res, next) {
  res.end()
});

module.exports = router;