const Villa = require("../models/villaModel");
const Forms = require("../models/formsModel");

const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

//Create a new form => /api/v1/form/new
exports.newForm = catchAsyncErrors(async (req, res, next) => {
  const { checkInDate, checkOutDate, attachments, totalPrice } = req.body;
  console.log(req.body)

  const formRequestor = {
    firstName: req.user.firstName,
    lastName: req.user.lastName,
    email: req.user.email,
  };

  let villa = await Villa.findOne({ villaName: req.body.villaName });
  console.log(villa)

  

  if (!villa) { return next(new ErrorHandler('Cannot find villa type')) }
  const villaDetails = {
    villaName: villa.villaName,
    villaPrice: villa.villaPrice
  }

  //const totalPrice = villa.villaPrice * duration;

  const form = await Forms.create({
    villaDetails,
    formRequestor,
    checkInDate,
    totalPrice,
    checkOutDate,
    attachments,
    sentAt: Date.now(),
    user: req.user._id,

  });

  res.status(200).json({
    success: true,
    form,
  });
});

//Get single form => /api/v1/form/:id

exports.getSingleForm = catchAsyncErrors(async (req, res, next) => {
  const form = await Forms.findById(req.params.id).populate(
    "user",
    "firstName lastName email"
  );

  if (!form) {
    return next(new ErrorHandler("No form found with that ID", 404));
  }

  res.status(200).json({
    success: true,
    form,
  });
});

//Delete form => /api/v1/admin/form/:id

exports.deleteForm = catchAsyncErrors(async (req, res, next) => {
  const form = await Forms.findById(req.params.id).populate(
    "user",
    "firstName lastName email"
  );

  if (!form) {
    return next(new ErrorHandler("No form found with that ID", 404));
  }

  await form.remove();

  res.status(200).json({
    success: true,
  });
});

//Get logged in user form => /api/v1/forms/me

exports.myForms = catchAsyncErrors(async (req, res, next) => {
  const forms = await Forms.find({ user: req.user.id });

  res.status(200).json({
    success: true,
    forms,
  });
});

//Get all forms - ADMIN => /api/v1/admin/forms/all

exports.allForms = catchAsyncErrors(async (req, res, next) => {
  const forms = await Forms.find();

  let totalAmount = 0;
  forms.forEach((forms) => {
    totalAmount += forms.totalPrice;
  });

  res.status(200).json({
    success: true,
    count: forms.length,
    totalAmount,
    forms,
  });
});

//Update / Process forms - ADMIN => /api/v1/admin/forms/:id

exports.updateForm = catchAsyncErrors(async (req, res, next) => {
  const forms = await Forms.findById(req.params.id);

  if (forms.bookingStatus === "Approved Booking") {
    return next(
      new ErrorHandler("This booking has already been approved", 400)
    );
  }

  forms.bookingStatus = req.body.status;
  forms.sentAt = Date.now();

  await forms.save();

  res.status(200).json({
    success: true,
  });

  res.status(200).json({
    success: true,
    totalAmount,
    forms,
  });
});
