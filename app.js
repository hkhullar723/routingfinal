const express = require('express');
const router = require('./route');

var app = express();


const port = 5050;

//routes
app.use('/',router)

//running on server on the port
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});