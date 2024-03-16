// Importing  mongoose 
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Social-Network',{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
});

// Exporting the connection to the database as a module
module.exports = mongoose.connection