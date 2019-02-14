var express = require('express');
var router = express.Router();

/* GET home page. */


router.get('/', function(req, res, next) {
  //res.render('index', { title: 'index' }); //홈페이지로 이동하나 주소창의 url이 바뀌지 않는다.

  console.log(req.param('_id'));


  if (true) {
    res.redirect('/list');
  } else {
    //error page로 가라...

  }

});



module.exports = router;
