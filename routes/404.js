var express = require('express');
var router = express.Router();
var ipware = require('ipware')();
//404页面
router.get('*', function (req, res) {
  res.render('404.html', {
    title: 'No Found'
  });
});

module.exports = router;