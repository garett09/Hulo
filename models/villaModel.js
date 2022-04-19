const mongoose = require("mongoose");

const villaSchema = new mongoose.Schema({
  villaName: {
    type: String,
    required: [true, "Villa is required"],
    trim: true,
  },
  villaPrice: {
    type: Number,
  },
  description: {
    type: String,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  extensions: [
    {
      inclusion: {
        type: String,
        required: true,
      },
      ammenities: {
        type: String,
      },
      addons: {
        type: String,
      },
      freebies: {
        type: String,
      },
      guestAccess: {
        type: String,
      },
    },
  ],
});

module.exports = mongoose.model("Villas", villaSchema);
