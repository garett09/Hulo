const mongoose = require("mongoose");

const formsSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    formRequestor: {
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
    },
    villaDetails: {
      villaName: {
        type: String,
        required: [true, "Please enter villa name"],
      },
      villaPrice: {
        type: Number,
        required: [true, "Please enter villa price"],
      },
    },

    checkInDate: {
      type: Date,
      required: [true, "Please enter check in date"],
      
    },
    checkOutDate: {
      type: Date,
      required: [true, "Please enter check out date"],
      
    },
    attachments: {
      type: Array,
    },
    duration: {
      type: Number,
      
    },
    totalPrice: {
      type: Number,
      
      default: 0.0,
    },
    bookingStatus: {
      type: String,
     
      default: "Processing with Dates not Approved",
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
