require("dotenv").config();
const mongoose = require("mongoose");

//Connect to mongoDb
const connectDatabase = async () => {
  const URI = process.env.MONGODB_URL;
  mongoose.connect(
    URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("DB connected");
      }
    }
  );
};

module.exports = connectDatabase;
