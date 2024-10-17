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
  //
=======
  /////
>>>>>>> 6987ab3d6a4cb8116ed18b6137f457c7bc622ed0
// Start the server
app.listen(port, () => {
  console.log(`App running at port :${port}`);
});
