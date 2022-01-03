var express = require('express');
var router = express.Router();

router.get('/test', function(req,res,next) {
  res.send("Hello World!\n");
});

router.get('helloworld', function(req,res,next) {
  res.send('Hello world!\n');
});

router.get('hello-world', function(req,res,next) {
  res.send('Hello world!\n');
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
