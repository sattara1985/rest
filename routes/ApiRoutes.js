
const express = require('express');
const router= express.Router();


router.get('/users', (req, res) => {
      res.send('Respuesta al get: "hello mundo steven"');
    });
   
module.exports = router;