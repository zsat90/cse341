require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const connectDB = require('./dbConn/connect');
const bodyParser = require('body-parser');

//Connection to DB
connectDB();

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/', require('./routes'));

mongoose.connection.once('open', () => {
  console.log('connected to MongoDB');
  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
});
