
const express = require('express');
const router= express.Router();
//const controllers = require('../controllers'); // metodo 1
const{UserControllers}=require('../controllers'); // destructurin

//users/

//router.get('/', controllers.UserControllers.getUsers); // metodo 1
//localhost:3000/users/
router.get('/', UserControllers.getUsers); //metodo destructuring
//users/
//localhost:3000/users/23
router.get('/:id', UserControllers.getOneUser);

  // users/
router.post('/', UserControllers.createUser);

// users/:id
router.put('/:id', UserControllers.putUser);

router.patch('/:id',  UserControllers.updateUser);

router.delete('/:id', UserControllers.deleteUser);
// aqui se esta exportando las rutas
module.exports = router;