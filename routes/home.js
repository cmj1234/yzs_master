var express = require('express');
var router = express.Router();
var ipware = require('ipware')();
// var indexController = require('../controllers/index');
var render = require('../common/render');
var error = require('../common/error');

// 首页
// router.get('/', function (req, res, next) {
//     // try {
//     render('index', '', res, req)
//     // } catch (e) {
//     //     error(req, res, next);
//     //     return;
//     // }
// })
router.get('/', function (req, res, next) {
    render('index', '', res, req);
});

module.exports = router;