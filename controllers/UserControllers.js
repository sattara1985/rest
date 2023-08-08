// funciones que resulevan el problemA
//const users = require('../models/UserFakeData')
const usersData = require('../models/UserFakeData')
const users = usersData.module

module.exports = {
    getUsers: (req, res) => {
        res.status(200).send(users);
        //res.json(users)
      },
    getOneUser: (req, res) => {
      //res.json(req.params.id); //validando que si tome el id del usuario
      //const usersData = users.mudole
      console.log(typeof req.params.id, req.params.id)
      const idUser=req.params.id
    
      console.log(idUser)
      const user=users.find(element => element.id == idUser)
      console.log(user)
      
      if(user){
        res.status(200).send(user)
      }else{
        res.status(404).send({message:'el usuario no existe'})
      }
     
      //console.log(usersData)
    },
    createUser: (req, res) => {},
    putUser: (req, res) => {},
    updateUser: (req, res) => {},
    deleteUser: (req, res) => {},
};