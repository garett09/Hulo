require("dotenv").config(); // Load environment variables from .env file
const express = require("express");
const forms = require("./routes/forms");
const auth = require("./routes/userRoute");
const cors = require("cors");
const errorMiddleware = require("./middleware/errors");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const connectDatabase = require("./config/database");
const { connect } = require("./routes/forms");

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

// Handle uncaught exception
process.on("uncaughtException", (err) => {
  if (process.env.NODE_ENV === "DEVELOPMENT") {
    console.log(`Error: ${err.stack}`);
    console.log("Shuttding down the server due to Uncaught Exception");
    process.exit(1);
  }
  if (process.env.NODE_ENV === "PRODUCTION") {
    console.log(`Error: ${err.message}`);
    console.log("Shuttding down the server due to Uncaught Exception");
    process.exit(1);
  }
});
//connect to our database
connectDatabase();
//Routes

app.use("/api/v1", auth);
app.use("/api/v1", forms);
app.use("/api", require("./routes/upload"));

//Error Middleware to handle errors
app.use(errorMiddleware);

const PORT = process.env.PORT || 4000; // set our port
const MODE = process.env.NODE_ENV;
const server = app.listen(PORT, () => {
  console.log(
    "Sever is connected to port",
    PORT,
    "and is running in",
    MODE,
    "mode"
  );
});

//Handle unwanted promise rejections
process.on("unhandledRejection", (err) => {
  if (process.env.NODE_ENV === "DEVELOPMENT") {
    console.log(`Error: ${err.stack}`);
    console.log("Shuttding down the server due to Unhandled Promise Rejection");
    server.close(() => {
      process.exit(1);
    });
  }

  if (process.env.NODE_ENV === "PRODUCTION") {
    console.log(`Error: ${err.message}`);
    console.log("Shuttding down the server due to Unhandled Promise Rejection");
    server.close(() => {
      process.exit(1);
    });
  }
});
