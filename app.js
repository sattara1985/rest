const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World steven!');
})

app.listen(port, () => {
  console.log(`Aplicacion de ejemplo en el puerto: ${port}`);
})