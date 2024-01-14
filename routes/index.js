var express = require('express');
const upload = require('./multer')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

//* upload file
router.post('/uploadFile', upload.array("image"),(req, res, next)=>{
  res.send("file uploaded");

});

module.exports = router;
