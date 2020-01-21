var User = require('../models/user');
var mongoose = require('mongoose');
var UserController = new Object();
function getUser(req,res){
    var userId =req.params.id;
    console.log(userId);

    User.findById(userId, (err,user)=>{
        console.log(user);
        if(err){

            return res.status(500).send({
                message:"Request error"
            });
        }
        
        if(!user){  

            return res.status(404).send({
                message:"El usuario no existe"
            });
        }
        
            
    });

}

function insertNewUser(req, res){
    var newuser_  =req.body;
        var newuser = new User({
            name: newuser_.name,
            lastname: newuser_.lastname,
            dni: newuser_.dni,
            celular: newuser_.celular,
            distrito: newuser_.distrito,
            pais: newuser_.pais,
            edad: newuser_.pais, 
            fecha_nac: newuser_.fecha_nac,
            email:newuser_.email
        });
         
    console.log(req.body)
    
    newuser.save(function (err, user) {
        if (err) return console.error(err);
        console.log(user.name + " saved to bookstore collection.");
    });
    

};

function getAllUsers(req,res){
    console.log(req.params.id)
    User.find({"dni":req.params.id},function(err,users){
        console.log(users);

        res.send(users);
    });
}

UserController.getUser = getUser;
UserController.getAllUsers = getAllUsers;
UserController.insertNewUser = insertNewUser;
module.exports = UserController;