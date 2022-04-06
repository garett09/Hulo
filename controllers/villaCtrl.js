const Villas = require("../models/villaModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

//Create new form => /api/v1/admin/forms/new
exports.newVilla = catchAsyncErrors(async (req, res, next) => {

  req.body.user =req.user.id

  const villa = await Villas.create(req.body);

  res.status(201).json({
    success: true,
    villa,
  });
});

//Get all forms => /api/v1/villas
exports.getAllVillas = catchAsyncErrors(async (req, res, next) => {
  const villas = await Villas.find();

  res.status(200).json({
    success: true,
    count: villas.length,
    villas,
    message: "All Villas fetched successfully",
  });
});

//Get single form details => /api/v1/form/:id
exports.getSingleVilla = catchAsyncErrors(async (req, res, next) => {
  const villa = await Villas.findById(req.params.id);
  if (!villa) {
    return next(new ErrorHandler("Villa not Found", 404));
  }
  res.status(200).json({
    success: true,
    villa,
  });
});

//Update form => /api/v1/form/:id
exports.updateVilla = catchAsyncErrors(async (req, res, next) => {
  let villa = await Villas.findById(req.params.id);

  if (!villa) {
    return next(new ErrorHandler("Villa not Found", 404));
  }

  villa = await Villas.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindandModify: false,
  });
  res.status(200).json({
    sucess: true,
    villa,
  });
});

//Delete villa => /api/v1/admin/form/:id

exports.deleteVilla = catchAsyncErrors(async (req, res, next) => {
  const villa = await Villas.findById(req.params.id);
  if (!villa) {
    return next(new ErrorHandler("Form not Found", 404));
  }
  await villa.remove();

  res.status(200).json({
    success: true,
    form,
    message: "Form deleted successfully",
  });
});

//Get all forms (Admin) => /api/v1/admin/villas
exports.getAllAdminVillas = catchAsyncErrors(async (req, res, next) => {
  const villasCount= await Villas.countDocuments();
  const villas = await Villas.find();

  res.status(200).json({
    success: true,
    villas,
    villasCount,
    message: "All Villas fetched successfully",
  });
});
