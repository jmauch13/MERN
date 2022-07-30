const mongoose = require('mongoose');
const db = process.env.ATLAS_URI;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/programming-thoughts', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = mongoose.connection;