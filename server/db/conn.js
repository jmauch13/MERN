const mongoose = require('mongoose');
const Db = process.env.ATLAS_URI;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/beyond-bootcamp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = mongoose.connection;