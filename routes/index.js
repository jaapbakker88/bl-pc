var express = require('express');
var router = express.Router();
var path    = require("path");

router.get('/', function(req, res){
  res.sendFile('../public/pc-old/index.html');

});
// router.get('/about', function(req, res){
//   res.render('about');
// });

module.exports = router;
