const mongoose = require('mongoose');

if (!process.env.MONGO_CONNECTION_STRING) {
    mongoose.set('debug', true);
}
mongoose.connect(
    process.env.MONGO_CONNECTION_STRING
    || `mongodb://127.0.0.1/${require('../package').name}`,
    { useNewUrlParser: true },
);

mongoose.Promise = Promise;

module.exports = {
    Todo: require('./todo').default,
}
