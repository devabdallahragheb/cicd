// Load the Express framework
const express = require('express');
const app = express();
const port = 3000;

// Define a route
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/test', (req, res) => {
    res.send('Hello World!');
  });
  app.get('/health', (req, res) => {
    res.send('Hello health!');
  });
  
<<<<<<< HEAD

=======
  //test
// Start the server
>>>>>>> 8c65b44942c6e2d01980abdaa45cbcf2cf51c4c3
app.listen(port, () => {
  console.log(`App running at port :${port}`);
});
