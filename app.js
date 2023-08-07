// const express = require('express');
// const app = express();
// const port = 3000;

// // app.get('/', (req, res) => {
// //   res.send('Hello World steven!');
// // })
// // se movio archivo a la ruta de userroutes.js

// app.listen(port, () => {
//   console.log(`Aplicacion de ejemplo en el puerto: ${port}`);
// });

const express = require('express');
const app = express();
const port = 3000;

const Routes = require('./routes');

app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.use('/users', Routes.UserRoutes);
app.use('/api', Routes.ApiRoutes);


app.listen(port, () => {
  console.log(`Aplicación de ejemplo en el puerto: ${port}`);
});