
const express = require('express');
const router= express.Router();


router.get('/users', (req, res) => {
      res.status(200).send(['Usuario Falso', 'Usuario falso 2']);
    });
router.post('/users', (req, res) => {
        res.send(['Usuario Falso', 'Usuario falso 2']);
      });
router.put('/users/:id', (req, res) => {
        res.send(['Usuario Falso', 'Usuario falso 2']);
      });
router.patch('/users/:id', (req, res) => {
        res.send(['Usuario Falso', 'Usuario falso 2']);
      });
router.delete('/users/:id', (req, res) => {
        res.send(['Usuario Falso', 'Usuario falso 2']);
      });

   
module.exports = router;