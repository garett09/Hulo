const Forms = require("../models/formsModel");

//Create new form => /api/v1/product/new
exports.newForm = async (req, res, next) => {

  const form = await Forms.create(req.body);

  res.status(201).json({
    status: "success",
    form
});
}

exports.getAllForms = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "All forms fetched successfully",
  });
};
