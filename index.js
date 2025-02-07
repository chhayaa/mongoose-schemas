const newUserModel = require('./models/new-user.model');
const mongoose = require('mongoose');


mongoURI="mongodb+srv://imeuswe-staging:imeuswe-staging@imeuswe-lower-env.bnbk7.mongodb.net/kapp-dev?retryWrites=true&w=majority&appName=imeuswe-lower-env"
const connectDB = async (mongoURI) => {
   // if (!mongoose.connection.readyState) {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB from shared schema package");
  //  }
};

module.exports = {
  connectDB,
  newUserModel
};