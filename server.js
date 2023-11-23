const express = require('express');
const app = express();
const apiRouter = require('./routes/api');
const bodyParser = require('body-parser');
const cors = require('cors');

// db
require('./db/mongoose.js');

// parser
// ContentAdmin-Type: application/json
app.use(bodyParser.json());

// fix  cors
app.use(cors());

// routes
app.use('/api/', apiRouter);

// server
app.listen(3001);