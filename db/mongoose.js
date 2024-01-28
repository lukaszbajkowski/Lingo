require('dotenv').config();

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_CONNECT_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    writeConcern: {
        w: 'majority',
        j: true,
    },
});
