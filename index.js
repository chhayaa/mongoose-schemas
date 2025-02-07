const newUserModel = require('./models/new-user.model');
const mongoose = require('mongoose');

const mongoose = require('mongoose');

const connectDB = async (mongoURI) => {
    if (!mongoose.connection.readyState) {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB from shared schema package");
    }
};

module.exports = {
  connectDB,
  newUserModel
};