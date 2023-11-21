// const mongoose = require("mongoose");
// const {database} = require("../config");
//
// // db connection
// mongoose.connect(database, {
//     "useNewUrlParser": true,
//     "useUnifiedTopology": true
// });

const mongoose = require('mongoose');
const dbUrl = process.env.DATABASE;

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

module.exports = mongoose;
