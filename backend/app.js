// app.js

const express = require('express');
const bodyParser = require('body-parser');
const connectToDataBase = require('./connectToDataBase');
const subscribe  = require('./routers/subsrcribeRouter');
const contactUsRouter  = require('./routers/contactUsRouter');

require('dotenv').config()

var cors = require('cors');
var app = express();
 
app.use(cors());

const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectToDataBase();



// Middleware for parsing JSON requests
app.use(bodyParser.json());
app.use(express.json());

// Subscribe route

app.use('/api',subscribe);

//contact us route

app.use('/api',contactUsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
