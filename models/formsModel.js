const mongoose = require("mongoose");

const formsSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First name is required"],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      unique: true,
    },
    mobileNumber: {
      type: String,
      required: [true, "Password is required"],
    },
    gender: {
      type: String,
      required: [true, "Gender is required"],
    },
    checkInDate: {
      type: Date,
        required: [true, "Check in Date is required"],
    },
    checkOutDate: {
        type: Date,
          required: [true, "Check out Date is required"],
      },
    submittedBy : {
        type: String,
        required: [true, "Check out Date is required"],
    }
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Forms", formsSchema);
