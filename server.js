const express = require('express');
const app = express();
const { port } = require('./config');
const apirouter = require('./routes/api');

require('./db/mongoose.js');

// routes
app.use('/', apirouter);

// server
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});

