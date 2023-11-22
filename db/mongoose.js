const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://bajkowski1e:3ehjPYbnDJ7blAJX@lingo.r2okvio.mongodb.net/?retryWrites=true&w=majority,',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // Set write concern explicitly
        writeConcern: {
            w: 'majority',
            j: true,
        },
    }
);