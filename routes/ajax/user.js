var express = require('express');
var router = express.Router();
// 数据库相关配置和方法
const db = require('../utils/db/db');
const user_sql = require('../utils/db/sql/user');
const utils = require('../utils/utils');
// 根据user_name查询是否存在该用户
router.get('/', function (req, res, next) {
    res.end()
});
// 根据user_name判断是否存在该用户
router.post('/isExistByUsername', (req, res) => {
    let mustArr = ['name'];
    let notMustArr = [];
    let numberArr = [];
    let params = utils.checkParams({
        data: req.body,
        mustArr,
        notMustArr,
        numberArr
    })
    if (params['msg']) {
        res.send({
            code: 400,
            msg: params['msg']
        })
        return
    }
    db.query(`${user_sql.selectName}'${params['name']}'`, (err, response) => {
        let isExist = 0; // 是否存在该用户
        if (err) res.send({
            code: 400,
            msg: db.DB_ERROR,
        });
        let response_result = JSON.parse(JSON.stringify(response)) || {};
        // 根据user_name判断是否存在该用户
        if (response_result && response_result.length > 0) {
            isExist = 1;
        }

        res.send({
            code: 200,
            isExist,
        });
    })
});
// 注册用户
router.post('/register', function (req, res, next) {
    let mustArr = ['name', 'password'];
    let notMustArr = [];
    let numberArr = [];
    let params = utils.checkParams({
        data: req.body,
        mustArr,
        notMustArr,
        numberArr
    })
    if (params['msg']) {
        res.send({
            code: 400,
            msg: params['msg']
        })
        return
    }
    let userArr = [params['name'],params['password']];
    db.query(user_sql.addUser, userArr, function (err, response) {
        if (err) {
            res.send({
                code: 400,
                msg: db.DB_ERROR,
            });
        }
        res.send({
            code: 200,
            msg:'操作成功',
        });
    })
});
module.exports = router;