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
    res.status(200).send('Healthy');
  });
  
 
app.listen(port, () => {
  console.log(`App running at port :${port}`);
});
