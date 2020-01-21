var express = require('express');
var router = express.Router();
var UserController = require('../controllers/user')
console.log(UserController)
/* GET users listing. */
router.get('/',function(req, res){
  res.send("hola usuarios")
});
/*
router.get('/:id',UserController.getUser);
*/

router.get('/:id',function(req,res){
  console.log(req.params)
  UserController.getAllUsers(req,res)
});

router.post('/new', function(req,res){
  UserController.insertNewUser(req,res)
});
router.put('/edit/:id', (req, res) => {
  res.send('Received a PUT HTTP method');
});
router.delete('/delete/id', (req, res) => {
  res.send('Received a DELETE HTTP method');
});
module.exports = router;
