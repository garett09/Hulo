const mongoose = require("mongoose");

const formsSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    villaName: {
      type: String,
      required: [true, "Please enter villa name"],
    },
    villaPrice: {
      type: Number,
      required: [true, "Please enter villa price"],
    },
    description: {
      type: String,
      required: [true, "Please enter villa price"],
    },

    checkInDate: {
      type: Date,

    },
    checkOutDate: {
      type: Date,

    },
    attachments: {
      type: Array,

    },
    duration: {
      type: Number,
      required: true
    },
    totalPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    bookingStatus: {
      type: String,
      required: true,
      default: "Processing",
    },
    sentAt: {
      type: Date,
    },

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
