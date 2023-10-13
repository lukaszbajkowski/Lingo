const express = require('express');
const app = express();
const { port } = require('./config');
const apiRouter = require('./routes/api');
const bodyParser = require('body-parser');

// db
require('./db/mongoose.js');

// parser
// Content-Type: application/json
app.use(bodyParser.json());

// routes
app.use('/api/', apiRouter);

// server
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});

