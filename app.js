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
<<<<<<< HEAD

=======
  //test
=======
  //
=======
  /////
>>>>>>> 6987ab3d6a4cb8116ed18b6137f457c7bc622ed0
>>>>>>> 32e879098d90df83e6b201a8bdbea12fe89d04f7
// Start the server
>>>>>>> 8c65b44942c6e2d01980abdaa45cbcf2cf51c4c3
app.listen(port, () => {
  console.log(`App running at port :${port}`);
});
