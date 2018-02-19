const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//setup express app
const app = express();


//connect to mongoDB (local one)
//mongoose.connect('mongodb://localhost/appgo');

//connect to mongoDB (remote one)
mongoose.connect('mongodb://ahesham092:pass1234@ds241668.mlab.com:41668/net-ninja');
mongoose.Promise = global.Promise;

app.use(express.static('public'));
// use body parser for parsing request data (attatch data to request obj and pass to the function)
app.use(bodyParser.json());
// initialize routes
app.use('/api', require('./routes/api'));

//error handling middleware
app.use(function(err, req, res, next){
  res.status(422).send({
    error: err.message
  });
});
// listen for requests
app.listen(4000, function () {
  console.log('now listening on port 4000! ...');
});
