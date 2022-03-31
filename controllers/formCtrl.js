const Forms = require("../models/formsModel");

//Create new form => /api/v1/admin/product/new
exports.newForm = async (req, res, next) => {
  const form = await Forms.create(req.body);

  res.status(201).json({
    status: true,
    form,
  });
};

//Get all forms => /api/v1/forms
exports.getAllForms = async (req, res, next) => {
  const forms = await Forms.find();

  res.status(200).json({
    success: true,
    count: forms.length,
    forms,
    message: "All forms fetched successfully",
  });
};

//Get single product details => /api/v1/product/:id
exports.getSingleForm = async (req, res, next) => {
  const form = await Forms.findById(req.params.id);
  if (!form) {
    return res.status(404).json({
      success: false,
      message: "Form not found",
    });
  }
  res.status(200).json({
    success: true,
    form,
  });
};

//Update product => /api/v1/product/:id
exports.updateForm = async (req, res, next) => {
  let form = await Forms.findById(req.params.id);

  if (!form) {
    return res.status(404).json({
      success: false,
      message: "Form not found",
    });
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
};
