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
      type: String,
    },
    checkInDate: {
      type: Date,
      required: [true, "Check in Date is required"],
    },
    checkOutDate: {
      type: Date,
      required: [true, "Check out Date is required"],
    },
    submittedBy: {
      type: String,
      required: [true, "MAMA MO"],
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "user",
      required: true,
    },
  },
  {
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Forms", formsSchema);
