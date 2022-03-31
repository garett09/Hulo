const Forms = require("../models/formsModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

//Create new form => /api/v1/admin/formsyarn /new
exports.newForm = catchAsyncErrors(async (req, res, next) => {
  const form = await Forms.create(req.body);

  res.status(201).json({
    success: true,
    form,
  });
});

//Get all forms => /api/v1/forms
exports.getAllForms = catchAsyncErrors(async (req, res, next) => {
  const forms = await Forms.find();

  res.status(200).json({
    success: true,
    count: forms.length,
    forms,
    message: "All forms fetched successfully",
  });
});

//Get single form details => /api/v1/form/:id
exports.getSingleForm = catchAsyncErrors(async (req, res, next) => {
  const form = await Forms.findById(req.params.id);
  if (!form) {
    return next(new ErrorHandler("Form not Found", 404));
  }
  res.status(200).json({
    success: true,
    form,
  });
});

//Update form => /api/v1/form/:id
exports.updateForm = catchAsyncErrors(async (req, res, next) => {
  let form = await Forms.findById(req.params.id);

  if (!form) {
    return next(new ErrorHandler("Form not Found", 404));
  }

  form = await Forms.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindandModify: false,
  });
  res.status(200).json({
    sucess: true,
    form,
  });
});

//Delete form => /api/v1/admin/form/:id

exports.deleteForm = catchAsyncErrors(async (req, res, next) => {
  const form = await Forms.findById(req.params.id);
  if (!form) {
    return next(new ErrorHandler("Form not Found", 404));
  }
  await form.remove();

  res.status(200).json({
    success: true,
    form,
    message: "Form deleted successfully",
  });
});
