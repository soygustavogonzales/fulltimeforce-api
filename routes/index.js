var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var app = require('../app');

mongoose.Promise = global.Promise;
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
console.log("****************************")
mongoose.connect('mongodb+srv://gustavo:pVtH9hBqyUSflJjF@cluster0-xslpy.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser: true})
.then(()=>console.log("conexion correcta"))
.catch((err) => {

  console.log("<--------Hubo un error-------->")
  console.log(err)
})

module.exports = router;
