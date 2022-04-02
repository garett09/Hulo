const Villa = require("../models/villaModel");
const Forms = require("../models/formsModel");

const errorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

//Create a new form => /api/v1/form/new
exports.newForm = catchAsyncErrors(async (req, res, next) => {
  const { contactInfo, bookingDetails, itemPrice, totalPrice } = req.body;

  const form = await Forms.create({
    contactInfo,
    bookingDetails,
    itemPrice,
    totalPrice,
    sentAt: Date.now(),
    user: req.user._id,
  });

  res.status(200).json({
    success: true,
    form,
  });
});
