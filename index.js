const newUserModel = require('./models/new-user.model');
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://imeuswe-staging:imeuswe-staging@imeuswe-lower-env.bnbk7.mongodb.net/kapp-dev?retryWrites=true&w=majority&appName=imeuswe-lower-env", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB Connected Successfully');
  } catch (err) {
    console.error('MongoDB Connection Error:', err);
    throw err;
  }
};

// Add connection event listeners
mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to DB');
});

mongoose.connection.on('error', (err) => {
  console.error('Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

module.exports = connectDB;


module.exports = {
  newUserModel
};