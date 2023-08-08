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

// desde la raiz
app.get('/', (req, res) => {
  res.send('Hello World! Steven app.js');
});

app.use(express.json());
app.use('/users', Routes.UserRoutes);
app.use('/api', Routes.ApiRoutes);


app.listen(port, () => {
  console.log(`Aplicación de ejemplo en el puerto: app.js ${port}`);
});