const express = require('express');
const app = express();
const { port } = require('./config');
const apirouter = require('./routes/api');

// routes
app.use('/', apirouter);

// server
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});

