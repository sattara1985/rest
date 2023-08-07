
const express = require('express');
const router= express.Router();


router.get('/', (req, res) => {
      res.status(200).send(['Usuario Falso', 'Usuario falso 2']);
    });
router.post('/', (req, res) => {
        res.send(['Usuario Falso', 'Usuario falso 2']);
      });
router.put('/:id', (req, res) => {
        res.send(['Usuario Falso', 'Usuario falso 2']);
      });
router.patch('/:id', (req, res) => {
        res.send(['Usuario Falso', 'Usuario falso 2']);
      });
router.delete('/:id', (req, res) => {
        res.send(['Usuario Falso', 'Usuario falso 2']);
      });

   
module.exports = router;