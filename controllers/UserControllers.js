// funciones que resulevan el problemA
const users = require('../models/UserFakeData')


module.exports = {
    getUsers: (req, res) => {
        res.status(200).send(users);
        //res.json(users)
      },
    getOneUser: (req, res) => {},
    createUser: (req, res) => {},
    putUser: (req, res) => {},
    updateUser: (req, res) => {},
    deleteUser: (req, res) => {},
};