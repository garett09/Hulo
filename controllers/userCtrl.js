const Users = require("../models/userModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const sendEmail = require("./sendMail");

// Register a user => /api/v1/register
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;

  const user = await Users.create({
    firstName,
    lastName,
    email,
    password,
    avatar: {
      public_id: "people/pngwing.com_qyfojj",
      url: "https://res.cloudinary.com/dziw9efzv/image/upload/v1647229197/samples/people/pngwing.com_qyfojj.png",
    },
  });

  const token = user.getJwtToken();

  res.status(201).json({
    success: true,
    token,
  });
});
