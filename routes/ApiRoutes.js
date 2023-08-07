
const express = require('express');
const router= express.Router();

//localhost:3000/api/
router.get('/', (req, res) => {
      res.send('Respuesta al get: "hello mundo steven desde aopioroutes.js"');
    });
   
module.exports = router;