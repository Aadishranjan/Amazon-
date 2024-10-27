const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const user = require('./routes/db/user.js')
const path = require('path');


// Initialize Express app
const app = express();

// Set up express-session middleware
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: 'harharmahadevharharmahadev'
}));
app.use(cors());


// Middleware to parse incoming request bodies
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up routes
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});