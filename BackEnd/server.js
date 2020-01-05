const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

// Initializate app
const app = express();
app.use(express.json());
app.use(cors());

// DataBase Connection
mongoose.connect('mongodb://localhost:27017/nodeapi', { 
  useNewUrlParser: true,
  useUnifiedTopology: true
 });
//  Require models after a sucessfull conection with DB
 requireDir('./src/models');

//  Give acess to the model
 const Product = mongoose.model('Product');

app.use('/api', require('./src/routes'));

app.listen(3001);