const mongoose = require("mongoose");

const formsSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please enter your First name"],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, "Please enter your Last name"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please enter your email"],
      trim: true,
      unique: true,
    },
    mobileNumber: {
      type: String,
      required: [true, "Please enter your mobile number"],
    },
    gender: {
      type: String
    },
    checkInDate: {
      type: String,
        required: [true, "Check in Date is required"],
    },
    checkOutDate: {
        type: String,
          required: [true, "Check out Date is required"],
      },
    submittedBy : {
        type: String,
        required: [true, "MAMA MO"],
    }
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Forms", formsSchema);
