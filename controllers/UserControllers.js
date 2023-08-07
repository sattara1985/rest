// funciones que resulevan el problemA
//const users = require('../models/UserFakeData')
const usersData = require('../models/UserFakeData')
const users = users.module

module.exports = {
    getUsers: (req, res) => {
        res.status(200).send(users);
        //res.json(users)
      },
    getOneUser: (req, res) => {
      //res.json(req.params.id); //validando que si tome el id del usuario
      //const usersData = users.mudole
      const idUser=req.params.id
      const user=users.find(element)
      //console.log(usersData)
    },
    createUser: (req, res) => {},
    putUser: (req, res) => {},
    updateUser: (req, res) => {},
    deleteUser: (req, res) => {},
};