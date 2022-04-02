const mongoose = require("mongoose");

const formsSchema = new mongoose.Schema(
  {
    contactInfo: [
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
      },
    ],

    bookingDetails: [
      {
        villaType: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "Villa",
        },
        villaName: {
          type: String,
          required: [true, "Please enter villa name"],
        },
        price: {
          type: Number,
          required: [true, "Please enter villa price"],
        },

        checkInDate: {
          type: Date,
          required: [true, "Check in Date is required"],
        },
        checkOutDate: {
          type: Date,
          required: [true, "Check out Date is required"],
        },
        attachments: {
          type: Array,
          required: [true, "Please attach form/s"],
        },
      },
    ],
    itemPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    totalPrice: {
      type: Number,
      required: true,
      default: 0.0,
    },
    sentAt: {
      type: Date,
    },
    bookingStatus: {
      type: String,
      required: true,
      default: "Processing",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
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
